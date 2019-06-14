#!/bin/bash



#

exit 0;


# resise
for f in *.jpg; do echo $f; magick $f -resize 300 -quality 70 "${f}_md_preview.jpg"; done
