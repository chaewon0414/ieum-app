const notificationExpensePlugin = () => window.Capacitor?.Plugins?.NotificationExpense || null;

const notificationExpenseAvailable = () => Boolean(notificationExpensePlugin());

async function getNotificationExpenseStatus() {
  const plugin = notificationExpensePlugin();
  if (!plugin) return { available: false, enabled: false };
  const result = await plugin.getStatus();
  return { available: true, enabled: Boolean(result?.enabled) };
}

async function openNotificationExpenseSettings() {
  const plugin = notificationExpensePlugin();
  if (!plugin) return false;
  await plugin.openSettings();
  return true;
}

async function getNotificationExpenseCandidates() {
  const plugin = notificationExpensePlugin();
  if (!plugin) return [];
  const result = await plugin.getCandidates();
  return Array.isArray(result?.items) ? result.items : [];
}

async function removeNotificationExpenseCandidate(id) {
  const plugin = notificationExpensePlugin();
  if (!plugin) return;
  await plugin.removeCandidate({ id });
}


