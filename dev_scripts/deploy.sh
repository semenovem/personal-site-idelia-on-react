#!/bin/bash

# chmod ug+x scripts/deploy.sh
# запускать из корня проекта todo приделать проверку места запуска

BRANCH='gh-pages'
COMMIT=$(git rev-parse HEAD)
#SMALL_HASH_COMMIT=${COMMIT:0:6}
#FILE='_config.yml'

#
#yarn install

# добавить hash коммита в переменные
#find $FILE -type f -exec sed -i "" "s/short_hash_commit:.*/short_hash_commit: $SMALL_HASH_COMMIT/" {} \;

### сборка проекта
#yarn build

#git checkout -- _config.yml

cp .gitignore build/
cp CNAME build/

### переключиться на ветку gh-pages
if git checkout ${BRANCH} ; then
  echo ok
else
  echo "Не удалось переключиться на ветку: $BRANCH"
  exit 1;
fi


### сбросить изменения к состоянию удаленной ветки, что бы не было конфликтов
git reset --hard origin/${BRANCH}


### отчистить директорию, кроме указанных
find * -not -path "build/*" -not -path "node_modules/*" -delete


mv build/.gitignore ./
mv build/CNAME ./


### перенести файлы для деплоя в корень проекта ./
mv -f ./build/* ./


git add .
git commit -m ${COMMIT}
git push
git checkout -
