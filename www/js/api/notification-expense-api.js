const notificationExpensePlugin = () => window.Capacitor?.Plugins?.NotificationExpense || null;

export const notificationExpenseAvailable = () => Boolean(notificationExpensePlugin());

export async function getNotificationExpenseStatus() {
  const plugin = notificationExpensePlugin();
  if (!plugin) return { available: false, enabled: false };
  const result = await plugin.getStatus();
  return { available: true, enabled: Boolean(result?.enabled) };
}

export async function openNotificationExpenseSettings() {
  const plugin = notificationExpensePlugin();
  if (!plugin) return false;
  await plugin.openSettings();
  return true;
}

export async function getNotificationExpenseCandidates() {
  const plugin = notificationExpensePlugin();
  if (!plugin) return [];
  const result = await plugin.getCandidates();
  return Array.isArray(result?.items) ? result.items : [];
}

export async function removeNotificationExpenseCandidate(id) {
  const plugin = notificationExpensePlugin();
  if (!plugin) return;
  await plugin.removeCandidate({ id });
}
