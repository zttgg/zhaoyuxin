---
name: commit-project
description: 使用 git add、commit 并 push 将当前项目提交到 Gitee 仓库 advanced-web-page-1029zyx。当用户说 提交项目、提交代码、push 代码、同步到 Gitee 时使用。不用于新建分支、打标签或修改远程配置。
---

# 提交项目

将当前项目（workspace 根目录 `d:\gaojiwangye\24001011029赵雨欣`）提交并推送到固定远程仓库：
`https://gitee.com/zhao-yuxin-111/advanced-web-page-1029zyx.git`

## 前置：记录提示词

执行任何 git 命令之前，按本项目规则先把用户本次提示词**追加**写入项目根的 `zyx1029_prompt.md`（不覆盖历史），记录包含：时间（Asia/Shanghai）、使用的模型、提示词原文。

## 流程

1. **初始化检查**（在项目根执行）
   - `git rev-parse --is-inside-work-tree` 失败 → 依次执行 `git init`、步骤 2 的 remote 添加。
   - 远程不存在 → `git remote add origin https://gitee.com/zhao-yuxin-111/advanced-web-page-1029zyx.git`；已存在但指向其他地址 → `git remote set-url origin ...`。

2. **检查变更**
   - 并行运行 `git status` 与 `git diff`（含 `--staged`），禁止 `-uall`。
   - 对照 `git log --oneline -5` 保持提交消息风格一致（无历史则自拟简洁风格）。

3. **暂存**
   - 用具体文件名 `git add`，禁止盲目 `git add -A`/`git add .`。
   - 疑似敏感文件（`.env`、凭据、令牌）一律不提交并向用户说明。

4. **提交**
   - 消息 1-2 句、聚焦「为什么」；用 HEREDOC 传入。
   - 按当前系统规范在消息末尾添加 `Co-Authored-By:` 尾注。
   - 预提交钩子失败时修复问题后**新建提交**，禁止 amend。

5. **推送**
   - 日常：`git push`；远程尚无对应分支（首次/空仓库）：`git push -u origin <当前分支>`，分支名以 `git branch --show-current` 为准。
   - 禁止 `--force`、禁止 `--no-verify`；推送到主分支的强推必须先警告用户。

6. **验证与汇报**
   - `git status` 确认工作区干净。
   - 汇报：分支名、commit hash、推送结果（成功/失败原因）。

## 故障处理

- **凭据失败**：提示用户配置 Gitee 凭据（推荐私人令牌 + Windows 凭据管理器），不要把凭据写入任何文件。
- **文件被占用**（Windows 常见）：提示用户关闭占用程序（IDE 预览、杀毒扫描）后重试。
- **网络失败**：检查网络与仓库可访问性（仓库为私有则需先在 Gitee 授权本账号），不要循环重试。
- **远程拒绝（非快进）**：先 `git fetch` 对比差异并向用户说明，由用户决定处理方式。
