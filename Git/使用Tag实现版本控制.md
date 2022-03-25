# 使用 Tag 实现版本控制

# 常用命令

| 命令 | 含义 | 备注 |
|:---|:---|:---|
| git tag -l | 查看所有标签 | |
| git tag -a <tag name> -m "commit" | 创建附注标签 | 推荐使用。基于 HEAD 打标签|
| git tag <tag name> | 创建轻量标签 | 基于 HEAD 打标签 |
| git show <tag name> | 查看标签详情 ||
| git tag -a <tag name> <commit id> | 基于某个 commit 打标签 ||
| git push origin <tag name> | 将本地标签推送到远程服务器 ||
| git push origin --tags | 将本地的所有标签，推送到远程服务器 ||
| git tag -d <tag name> | 删除标签 ||
| git push origin --delete <tag name> | 删除远程标签 ||
| git checkout <tag name> | 切换到某个版本，查看此版本的文件 | 只可查看文件，不可更改文件。即使做了某些更改，标签也不会发生变化，并且次提交不会属于任何分之，只用通过确切的 commit id 才能访问 |
| git checkout -b <branch name> <tag name> | 基于某个标签创建分支 | 急于某个版本，修复 bug 或增加新功能，然后提交 |

# 参考链接

1. [git book 文档 ](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE)
1. []
