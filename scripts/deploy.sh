#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run build

cd public

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:Coolyang1996/coolyang1996.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:yueyang8389/blog.git master:gh-pages

cd ../
rm -rf public