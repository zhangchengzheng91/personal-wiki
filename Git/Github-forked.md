# github fork

```shell
github fork 项目之后，通过 git clone 将 fork 的项目 clone 到本地
git clone git@github.com:zhangchengzheng91/vue.git
# 检查本地仓库关联的远程仓库
git remote -v
# origin	git@github.com:zhangchengzheng91/vue.git (fetch)
# origin	git@github.com:zhangchengzheng91/vue.git (push)

# 这个时候，只能做到本地仓库和 fork 仓库保持同步，需要将源码仓库和本地仓库关联起来
git remote add upstream git@github.com:vuejs/vue.git

git remote -v
# origin	git@github.com:zhangchengzheng91/vue.git (fetch)
# origin	git@github.com:zhangchengzheng91/vue.git (push)
# upstream	git@github.com:vuejs/vue.git (fetch)
# upstream	git@github.com:vuejs/vue.git (push)

# 本地仓库同步源码仓库
# 可同步 branch，tag，commit
git fetch upstream

# 在本地仓库，将源源仓库的 tag 同步到 fork 仓库
git fetch upstream --tags
git push --tags

# 在本地仓库，同步已 fork 的分支
git pull upstream dev
git push

# 同步未 fork 的分支
git checkout -b main upstream/main
git push origin -u main:main
```