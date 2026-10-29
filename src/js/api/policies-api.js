function formatDeadline(date) {
  if (!date) return "상시 신청";
  return `${date.replaceAll("-", ".")}까지`;
}

async function fetchPublishedPolicies() {
  const client = getSupabaseClient();
  if (!client) return null;

  const { data, error } = await client
    .from("policies")
    .select("id,title,category,summary,content,support_amount,application_start,application_end,region,image_url,application_url,published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw error;
  return data.map((policy) => ({
    id: policy.id,
    title: policy.title,
    category: policy.category,
    desc: policy.summary,
    content: policy.content,
    amount: policy.support_amount || "지원 내용 확인",
    deadline: formatDeadline(policy.application_end),
    region: policy.region,
    image: policy.image_url,
    applicationUrl: policy.application_url,
    match: 0
  }));
}


