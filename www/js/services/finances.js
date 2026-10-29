import { fetchMonthlyFinances, fetchUserIncome, upsertMonthlyFinance, upsertUserIncome } from "../api/finance-api.js";
import { state } from "../core/state.js";

const financeMonthKey = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
const financeMonthDate = (date = new Date()) => `${financeMonthKey(date)}-01`;

export function calculateLivingTotals() {
  const living = state.living;
  const expenseTotal = living.expenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const recurringTotal = living.recurring.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const rentAmount = Number(living.rent.amount || 0);
  const spending = expenseTotal + recurringTotal + rentAmount;
  return {
    expenseTotal,
    recurringTotal,
    rentAmount,
    spending,
    balance: Number(living.income || 0) - spending
  };
}

export async function loadMonthlyFinances() {
  if (!state.authUser) return [];
  let rows = await fetchMonthlyFinances(state.authUser.id, 12);
  let current = rows.find((row) => String(row.month).slice(0, 7) === financeMonthKey());
  if (!current) {
    current = await upsertMonthlyFinance({
      userId: state.authUser.id,
      month: financeMonthDate(),
      income: Number(state.living.income || 0),
      expenseTotal: 0
    });
    rows = [current, ...rows];
  }
  rows.forEach((row) => {
    const key = String(row.month).slice(0, 7);
    state.living.history[key] = {
      income: Number(row.income || 0),
      spending: Number(row.expense_total || 0)
    };
  });
  if (current) state.living.income = Number(current.income || 0);
  localStorage.setItem("ieum-living", JSON.stringify(state.living));
  return rows;
}

export async function loadUserIncome() {
  if (!state.authUser) return null;
  let row = await fetchUserIncome(state.authUser.id);
  if (!row) {
    row = await upsertUserIncome({
      userId: state.authUser.id,
      monthlyIncome: null,
      incomeStatus: "not_set"
    });
  }
  state.living.income = Number(row?.monthly_income || 0);
  localStorage.setItem("ieum-living", JSON.stringify(state.living));
  return row;
}

export async function syncUserIncome(monthlyIncome, incomeStatus = "provided") {
  if (!state.authUser) return null;
  return upsertUserIncome({
    userId: state.authUser.id,
    monthlyIncome: incomeStatus === "provided" ? Math.max(0, Number(monthlyIncome || 0)) : null,
    incomeStatus
  });
}

export async function syncCurrentMonthlyFinance() {
  if (!state.authUser) return null;
  const totals = calculateLivingTotals();
  const key = financeMonthKey();
  state.living.history[key] = { income: Number(state.living.income || 0), spending: totals.spending };
  localStorage.setItem("ieum-living", JSON.stringify(state.living));
  return upsertMonthlyFinance({
    userId: state.authUser.id,
    month: financeMonthDate(),
    income: state.living.income,
    expenseTotal: totals.spending
  });
}
