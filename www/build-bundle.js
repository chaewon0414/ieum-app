const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const files = [
  "data/mock-data.js", "api/supabase-client.js", "api/policies-api.js",
  "api/community-api.js", "api/auth-api.js", "api/finance-api.js",
  "api/ai-api.js", "api/notification-expense-api.js", "core/state.js",
  "core/utils.js", "components/policy-card.js", "services/notifications.js",
  "pages/home.js", "pages/policies.js", "pages/recommend.js", "pages/living.js",
  "pages/living-settings.js", "pages/support-status.js", "pages/community.js",
  "pages/post.js", "pages/jobs.js", "pages/chat.js", "pages/write.js",
  "pages/profile.js", "pages/login.js", "pages/forgot-password.js", "pages/reset-password.js", "pages/signup.js", "pages/welcome.js",
  "pages/onboarding.js", "pages/notifications.js", "pages/views.js",
  "core/render.js", "services/chat.js", "services/policies.js",
  "services/community.js", "services/finances.js", "services/auth.js",
  "events/handlers.js", "core/router.js", "app.js"
];

const bundle = files.map((file) => {
  const source = fs.readFileSync(path.join(root, "js", file), "utf8")
    .replace(/^import .*;\r?\n/gm, "")
    .replace(/^export /gm, "")
    .trim();
  return `// Source: js/${file}\n${source}`;
}).join("\n\n\n") + "\n";

fs.writeFileSync(path.join(root, "js", "app.bundle.js"), bundle);
