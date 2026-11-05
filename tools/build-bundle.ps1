$ErrorActionPreference = "Stop"

$files = @(
  "js/data/mock-data.js",
  "js/api/supabase-client.js",
  "js/api/policies-api.js",
  "js/api/community-api.js",
  "js/api/auth-api.js",
  "js/api/finance-api.js",
  "js/api/ai-api.js",
  "js/api/notification-expense-api.js",
  "js/core/state.js",
  "js/core/utils.js",
  "js/components/policy-card.js",
  "js/pages/home.js",
  "js/pages/policies.js",
  "js/pages/policy-editor.js",
  "js/pages/recommend.js",
  "js/pages/living.js",
  "js/pages/living-settings.js",
  "js/pages/support-status.js",
  "js/pages/community.js",
  "js/pages/post.js",
  "js/pages/jobs.js",
  "js/pages/chat.js",
  "js/pages/write.js",
  "js/pages/profile.js",
  "js/pages/saved-policies.js",
  "js/pages/login.js",
  "js/pages/forgot-password.js",
  "js/pages/reset-password.js",
  "js/pages/signup.js",
  "js/pages/welcome.js",
  "js/pages/onboarding.js",
  "js/pages/notifications.js",
  "js/pages/views.js",
  "js/core/render.js",
  "js/services/chat.js",
  "js/services/policies.js",
  "js/services/community.js",
  "js/services/finances.js",
  "js/services/auth.js",
  "js/services/notifications.js",
  "js/events/handlers.js",
  "js/core/router.js",
  "js/app.js"
)

$parts = foreach ($file in $files) {
  $content = Get-Content -Raw -Encoding UTF8 $file
  $content = [regex]::Replace($content, '(?m)^import .*?;\r?\n', '')
  $content = [regex]::Replace($content, '(?m)^export ', '')
  "// Source: $file`r`n$content"
}

$utf8 = New-Object System.Text.UTF8Encoding($false)
$output = Join-Path (Get-Location) "js/app.bundle.js"
[System.IO.File]::WriteAllText($output, ($parts -join "`r`n`r`n"), $utf8)
Write-Output "Updated: $output"
