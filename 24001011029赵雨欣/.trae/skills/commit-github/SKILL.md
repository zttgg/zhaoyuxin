# 提交到 GitHub

将当前项目提交 commit 并推送到 GitHub 仓库：
`git@github.com:zttgg/zhaoyuxin.git`（HTTPS 地址：https://github.com/zttgg/zhaoyuxin.git，已验证存在且为空）

触发词：提交到github、push到github、同步到github、上传到github。

## 前置：记录提示词

执行任何 git 命令之前，按本项目规则先把用户本次提示词**追加**写入项目根的 `zyx1029_prompt.md`（不覆盖历史），记录包含：时间（Asia/Shanghai）、使用的模型、提示词原文。

## 认证方式（使用已设置公钥）

- 使用 SSH 公钥认证（Ed25519），私钥位于 `C:\Users\Lenovo\.ssh\id_ed25519`。
- 公钥指纹：`SHA256:uB1bg1BgcrNGuKIrnDpOv1U8c8CcO+k7I0vHnspmks8`
- 优先使用 SSH 地址 `git@github.com:zttgg/zhaoyuxin.git`。
- 若 22 端口被拒（Connection refused），改用 443 端口 SSH：
  - 直接使用地址 `ssh://git@ssh.github.com:443/zttgg/zhaoyuxin.git`；
  - 或在 `~/.ssh/config` 追加：
    ```
    Host github.com
      HostName ssh.github.com
      Port 443
      User git
    ```
- 避免 HTTPS 推送：沙箱内对 github.com 存在 SSL 证书拦截问题（unable to get local issuer certificate）。

## 流程

1. **初始化检查**（git 仓库根为 `d:\gaojiwangye`，非 workspace 文件夹）
   - `git rev-parse --is-inside-work-tree` 失败 → 依次执行 `git init`、添加远程。
   - 远程 `github` 不存在 → `git remote add github git@github.com:zttgg/zhaoyuxin.git`；已存在但指向其他地址 → 先向用户确认再 `git remote set-url`。
   - 注意：写入 `.git/config` 可能被沙箱阻止（Permission denied / config.lock），此时请求用户批准沙箱外执行，不要静默绕过。

2. **检查变更**
   - 并行运行 `git status` 与 `git diff`（含 `--staged`），禁止 `-uall`。
   - 对照 `git log --oneline -5` 保持提交消息风格一致。

3. **暂存**
   - 用具体文件名 `git add`，禁止盲目 `git add -A`/`git add .`。
   - 疑似敏感文件（`.env`、凭据、令牌）一律不提交并向用户说明。

4. **提交**
   - 消息 1-2 句、聚焦「为什么」。
   - **PowerShell 不支持 HEREDOC**：用多个 `-m` 参数传递（标题、正文、`Co-Authored-By:` 尾注各一个 `-m`）。
   - 预提交钩子失败时修复问题后**新建提交**，禁止 amend。

5. **推送**
   - 首次：`git push -u github <当前分支>`，分支名以 `git branch --show-current` 为准（当前为 master）。
   - 日常：`git push github`。
   - 禁止 `--force`、禁止 `--no-verify`；推送到主分支的强推必须先警告用户。

6. **验证与汇报**
   - `git status` 确认工作区干净。
   - `git ls-remote github` 确认远端已收到最新 commit。
   - 汇报：分支名、commit hash、推送结果（成功/失败原因）。

## 故障处理

- **SSH 认证失败（Permission denied (publickey)）**：提示用户将以下公钥添加到 GitHub → Settings → SSH and GPG keys：
  `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAII8ERY+DfehtC8buaKRnP4AQO9VYaEmQpMoK8uWNy8IP Zyx01060325`
- **22 端口 Connection refused**：改用 `ssh://git@ssh.github.com:443/zttgg/zhaoyuxin.git`。
- **沙箱限制写 .git/config**：不添加远程，直接 URL 推送 `git push ssh://git@ssh.github.com:443/zttgg/zhaoyuxin.git <分支>`（首次推送可加环境变量 `$env:GIT_SSH_COMMAND = "ssh -o StrictHostKeyChecking=accept-new"` 接受 GitHub 主机密钥）。
- **远程拒绝（非快进）**：先 `git fetch github` 对比差异并向用户说明，由用户决定处理方式。
- **网络失败**：检查网络与仓库可访问性，不要循环重试。
- **大仓库推送中断（broken pipe）**：仓库 pack 约 622MB，单次推送易断。改用分批推进：按 `git log --format="%h" --reverse` 取等分提交点逐段 `git push <url> <commit>:refs/heads/master`（注意仓库历史含 merge，仅当后一点是前一点后代时才 fast-forward；可用 `git merge-base --is-ancestor A B` 验证后直接推 HEAD）。
- **GitHub 大文件警告（>50MB）**：仅警告不影响推送；>100MB 会被拒绝，需 Git LFS。

## 已验证可用的推送命令（2026-10-31 实测）

```powershell
$env:GIT_SSH_COMMAND = "ssh -o StrictHostKeyChecking=accept-new"
git push ssh://git@ssh.github.com:443/zttgg/zhaoyuxin.git master
```
