function requireClient() {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase가 연결되지 않았습니다.");
  return client;
}

async function fetchMonthlyFinances(userId, limit = 12) {
  const { data, error } = await requireClient()
    .from("monthly_finances")
    .select("id,user_id,month,income,expense_total,created_at,updated_at")
    .eq("user_id", userId)
    .order("month", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return data || [];
}

async function upsertMonthlyFinance({ userId, month, income, expenseTotal }) {
  const { data, error } = await requireClient()
    .from("monthly_finances")
    .upsert({
      user_id: userId,
      month,
      income: Math.round(Number(income || 0)),
      expense_total: Math.round(Number(expenseTotal || 0)),
      updated_at: new Date().toISOString()
    }, { onConflict: "user_id,month" })
    .select("id,user_id,month,income,expense_total,created_at,updated_at")
    .single();
  if (error) throw error;
  return data;
}

async function fetchUserIncome(userId) {
  const { data, error } = await requireClient()
    .from("user_incomes")
    .select("user_id,monthly_income,income_status,created_at,updated_at")
    .eq("user_id", userId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

async function upsertUserIncome({ userId, monthlyIncome, incomeStatus }) {
  const { data, error } = await requireClient()
    .from("user_incomes")
    .upsert({
      user_id: userId,
      monthly_income: monthlyIncome === null ? null : Math.round(Number(monthlyIncome || 0)),
      income_status: incomeStatus,
      updated_at: new Date().toISOString()
    }, { onConflict: "user_id" })
    .select("user_id,monthly_income,income_status,created_at,updated_at")
    .single();
  if (error) throw error;
  return data;
}


