import { homeView } from "./home.js";
import { policiesView } from "./policies.js";
import { recommendView } from "./recommend.js";
import { livingView } from "./living.js";
import { livingSettingsView } from "./living-settings.js";
import { supportStatusView } from "./support-status.js";
import { communityView } from "./community.js";
import { postView } from "./post.js";
import { jobsView } from "./jobs.js";
import { chatView } from "./chat.js";
import { writeView } from "./write.js";
import { profileView } from "./profile.js";
import { loginView } from "./login.js";
import { forgotPasswordView } from "./forgot-password.js";
import { resetPasswordView } from "./reset-password.js";
import { signupView } from "./signup.js";
import { welcomeView } from "./welcome.js";
import { onboardingView } from "./onboarding.js";
import { notificationsView, notificationSettingsView } from "./notifications.js";

export const views = {
  home: homeView,
  policies: policiesView,
  recommend: recommendView,
  living: livingView,
  "living-settings": livingSettingsView,
  "support-status": supportStatusView,
  community: communityView,
  post: postView,
  jobs: jobsView,
  chat: chatView,
  write: writeView,
  profile: profileView,
  login: loginView,
  "forgot-password": forgotPasswordView,
  "reset-password": resetPasswordView,
  signup: signupView,
  welcome: welcomeView,
  onboarding: onboardingView,
  notifications: notificationsView,
  "notification-settings": notificationSettingsView,
};
