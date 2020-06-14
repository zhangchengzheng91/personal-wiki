1. 增加远程仓库
```hash
git remote add <remote-name> <remote-url>
```
1. 拉取远程分支代码
```hash
git fetch <remote-name>
git checkout -b <local-branch-name> origin/<origin-branch-name>
```
1. 将本地分支推送到远程仓库
```hash
git push origin -u <local-branch-name>:<origin-branch-name>
```
1. 删除远程分支
```hash
git push origin --delete <origin-branch-name>
git push origin HEAD:origin-branch-name
```
1. 查看所有分支
```hash
git branch -a
```
1. 重写历史
```hash
git commit --amend
```
1. 本地生成 ssh key
> [参考链接](https://git-scm.com/book/zh/v1/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E7%94%9F%E6%88%90-SSH-%E5%85%AC%E9%92%A5)
```hash
ssh-keygen
```
1. 基于某个 commit 创建一个新分支
```hash
git branch <branch-name> <sha1>
```
1. 误删分支的解决方式
```hash
# 查看所有的 commit
git reflog
# 恢复到被删除的那个 commit
git reset --hard <commit-id>
```

1. git status 中文文件名编码问题解决
```hash
git config --global core.quotepath false
```

1. git tag
```hash
# 列出标签
git tag
# 过滤标签
git tag -l '<filter>'
# 创建标签
git tag -a <tag-name> -m '<description>'
# 查看标签
git show <tag-name>
# 基于某个 commit 打 tag
git commit -a <tag-name> <commit-sha1>
# 共享标签
git push <origin-remote-name> <tag-name>
# 将所有 tag 将本地分支推送到远程仓库
git push origin --tags
# 检出标签
git checkout -b <branch-name> <tag-name>
```
