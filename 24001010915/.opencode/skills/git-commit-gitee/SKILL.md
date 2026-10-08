---
name: git-commit-gitee
description: 朱思冰(24001010915)的自动提交 git 代码到 Gitee 仓库的技能。当需要 git commit 并 push 到 Gitee、提交高级网页设计课程作业时使用。
---

# Git Commit to Gitee（朱思冰 24001010915）

将本地项目通过 git commit 并 push 到 Gitee 仓库的技能。

## 前置条件

1. 已安装 Git
2. 有 Gitee 仓库地址
3. 有 Gitee 私人令牌（access token）

## 操作步骤

### 1. 初始化 Git 仓库（如果尚未初始化）

```bash
git init
git config user.name "朱思冰"
git config user.email "3862656106@qq.com"
```

### 2. 添加远程仓库（令牌内嵌方式）

```bash
git remote add origin "https://<Gitee用户名>:<私人令牌>@gitee.com/<组织>/<仓库名>.git"
```

> 注意：用户名是 Gitee 个人用户名（如 zhu-sibing），不是组织名。

### 3. 添加文件并提交

```bash
git add -A
git commit -m "提交朱思冰(24001010915)的高级网页设计课堂实践作品"
```

### 4. 拉取远程最新并推送

本课程仓库是多人共享仓库，push 前先拉取合并：

```bash
git pull origin master --no-rebase --no-edit
git push -u origin master
```

## 重要规则

- 代码提交到以**学号命名**的子文件夹（如 `24001010915/`），不覆盖仓库根目录。
- push 报 `fetch first` 或 `non-fast-forward` 时，先 `git pull` 再重新 push。
- 不要提交 `node_modules`、`.venv`、临时文件等无关内容。
- 若多人同时提交导致冲突，用 `git merge --abort` 中止后重新 pull 合并。
