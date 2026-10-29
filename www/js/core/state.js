import { APP_DATA } from "../data/mock-data.js";

const readStoredState = (key, fallback) => {
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    return saved && typeof saved === "object" ? saved : fallback;
  } catch {
    return fallback;
  }
};

const defaultSupportApplications = [
  { id: "youth-rent", title: "청년 월세 지원", amount: 200000, status: "심사 중", updatedAt: "2026-08-28" },
  { id: "youth-savings", title: "청년도약계좌 기여금", amount: 500000, status: "서류 검토", updatedAt: "2026-08-30" }
];

const defaultLiving = {
  income: 1900000,
  expenses: [
    { id: "expense-1", content: "생활용품", amount: 32800, date: "2026-08-31" },
    { id: "expense-2", content: "점심 식비", amount: 11000, date: "2026-08-30" }
  ],
  rent: { amount: 500000, startMonth: "2026-03", endMonth: "2027-02" },
  recurring: [
    { id: "recurring-1", category: "공과금", content: "전기·가스", amount: 65000 },
    { id: "recurring-2", category: "정기지출", content: "통신비", amount: 55000 }
  ],
  history: {
    "2026-06": { income: 1750000, spending: 1310000 },
    "2026-07": { income: 1850000, spending: 1420000 }
  }
};

const normalizeLiving = (living) => ({
  ...defaultLiving,
  ...living,
  expenses: Array.isArray(living?.expenses) ? living.expenses : defaultLiving.expenses,
  recurring: Array.isArray(living?.recurring) ? living.recurring : defaultLiving.recurring,
  rent: { ...defaultLiving.rent, ...(living?.rent || {}) },
  history: { ...defaultLiving.history, ...(living?.history || {}) }
});

export const state = {
  route: new URLSearchParams(location.search).has("reset-password") ? "reset-password" : (location.hash.slice(1) || "home"),
  selectedPost: 0,
  replyTarget: null,
  policyFilter: "전체",
  policySearch: "",
  policySort: "추천순",
  showPolicySort: false,
  communityKind: "질문",
  communityFilter: "취업",
  policies: [...APP_DATA.policies],
  policiesLoading: false,
  policiesError: null,
  policyDataSource: "mock",
  posts: APP_DATA.posts,
  communityLoading: false,
  communityError: null,
  communityDataSource: "mock",
  authUser: null,
  profile: null,
  customInfo: { gender: "" },
  livingCalendarMonth: `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}`,
  authLoading: true,
  authSubmitting: false,
  authEmail: "",
  authRecovery: new URLSearchParams(location.search).has("reset-password"),
  authError: null,
  authNotice: null,
  welcomeCompleted: localStorage.getItem("ieum-welcome-completed") === "true",
  guestMode: sessionStorage.getItem("ieum-guest-mode") === "true",
  onboardingSubmitting: false,
  onboardingError: null,
  chatLoading: false,
  saved: new Set(readStoredState("ieum-saved-policies", [])),
  notificationSettings: readStoredState("ieum-notification-settings", { community: true, policy: true, rent: true }),
  notificationRead: readStoredState("ieum-notification-read", {}),
  checked: new Set([0, 2]),
  supportApplications: readStoredState("ieum-support-applications", defaultSupportApplications),
  living: normalizeLiving(readStoredState("ieum-living", defaultLiving)),
  notificationExpenseAvailable: false,
  notificationExpenseEnabled: false,
  notificationExpenseCandidates: [],
  notificationExpenseLoading: false,
  chat: [{ type: "bot", text: "안녕하세요, 지원님! 주거·생활·취업 정책 중 어떤 도움이 필요하세요?" }]
};
