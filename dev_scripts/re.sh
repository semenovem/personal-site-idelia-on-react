#!/bin/bash

# usage
# bash ../../_scripts/re.sh 001.jpg xs sm md lg xl

#xs: 0
#sm: 600
#md: 960
#lg: 1280
#xl: 1920

if [ ! -n "$1" ]
then
  echo "No parameters found. "
  exit 1
fi

WAY=$(pwd)
FILE=$1
FILE_EXT=${FILE##*.}
FILE_NAME=${FILE%.*}

if [ ! -f ${FILE} ]
then
  echo "The $FILE file does not exist"
  exit 1
fi

shift

for param in "$@"
do
  SUFFIX="w$param"

  if [ ${param} = "xs" ]; then param=600; SUFFIX=xs; fi
  if [ ${param} = "sm" ]; then param=960; SUFFIX=sm; fi
  if [ ${param} = "md" ]; then param=1280; SUFFIX=md; fi
  if [ ${param} = "lg" ]; then param=1920; SUFFIX=lg; fi
#  if [ ${param} = "xl" ]; then param=1920; SUFFIX=xl; fi

  NEW_FILE="$FILE_NAME--$SUFFIX.$FILE_EXT"

  echo ${FILE}
  echo ${NEW_FILE}
  magick ${WAY}/${FILE} -resize ${param} ${WAY}/${NEW_FILE}

  count=$(( $count + 1 ))
done
