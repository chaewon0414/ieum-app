import { getSupabaseClient } from "./supabase-client.js";

function formatDeadline(date) {
  if (!date) return "상시 신청";
  return `${date.replaceAll("-", ".")}까지`;
}

function mapPolicy(policy) {
  return {
    id: policy.id,
    title: policy.title,
    category: policy.category,
    desc: policy.summary,
    summary: policy.summary,
    content: policy.content,
    amount: policy.support_amount || "지원 내용 확인",
    supportAmount: policy.support_amount || "",
    deadline: formatDeadline(policy.application_end),
    applicationStart: policy.application_start || "",
    applicationEnd: policy.application_end || "",
    region: policy.region,
    minimumAge: policy.minimum_age ?? "",
    maximumAge: policy.maximum_age ?? "",
    incomeCondition: policy.income_condition || "",
    employmentCondition: policy.employment_condition || "",
    image: policy.image_url,
    imageUrl: policy.image_url || "",
    applicationUrl: policy.application_url || "",
    contact: policy.contact || "",
    status: policy.status,
    publishedAt: policy.published_at,
    match: 0
  };
}

const policyColumns = "id,title,category,summary,content,support_amount,application_start,application_end,region,minimum_age,maximum_age,income_condition,employment_condition,image_url,application_url,contact,status,published_at";

export async function fetchPolicies({ includeUnpublished = false } = {}) {
  const client = getSupabaseClient();
  if (!client) return null;

  let query = client.from("policies").select(policyColumns);
  if (!includeUnpublished) query = query.eq("status", "published");
  query = query.order(includeUnpublished ? "updated_at" : "published_at", { ascending: false });

  const { data, error } = await query;
  if (error) throw error;
  return data.map(mapPolicy);
}

export async function savePolicy(policy) {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase가 연결되지 않았습니다.");

  const payload = {
    title: policy.title,
    category: policy.category,
    summary: policy.summary,
    content: policy.content,
    support_amount: policy.supportAmount || null,
    application_start: policy.applicationStart || null,
    application_end: policy.applicationEnd || null,
    region: policy.region || "전국",
    minimum_age: policy.minimumAge === "" ? null : Number(policy.minimumAge),
    maximum_age: policy.maximumAge === "" ? null : Number(policy.maximumAge),
    income_condition: policy.incomeCondition || null,
    employment_condition: policy.employmentCondition || null,
    application_url: policy.applicationUrl || null,
    contact: policy.contact || null,
    image_url: policy.imageUrl || null,
    status: policy.status,
    published_at: policy.status === "published" ? (policy.publishedAt || new Date().toISOString()) : null,
    updated_at: new Date().toISOString()
  };

  const query = policy.id
    ? client.from("policies").update(payload).eq("id", policy.id)
    : client.from("policies").insert(payload);
  const { data, error } = await query.select(policyColumns).single();
  if (error) throw error;
  return mapPolicy(data);
}
