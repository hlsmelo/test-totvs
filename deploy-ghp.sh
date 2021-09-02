ng build --output-path docs --base-href /test-totvs/;
cp -f ./docs/index.html ./docs/404.html
git add .;
git commit -m 'Deploy Github Pages';
git push;
exit 0;
