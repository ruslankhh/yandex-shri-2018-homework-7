#!/bin/bash

export DATE=`date '+%Y-%m-%d_%H-%M-%S'`

mkdir ./reports/$DATE-mobile
ed -s reports/index.html <<- EOM
/<\/ul>/i
    <li>
      <a href="./$DATE-mobile/lifehacker.ru-mobile_$DATE.html">
        lifehacker.ru-mobile-$DATE
      </a>
    </li>
.
wq
EOM
