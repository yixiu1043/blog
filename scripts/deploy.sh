npm run build

cd public

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:Coolyang1996/coolyang1996.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:yixiu1043/blog.git master:gh-pages

cd ../
rm -rf public