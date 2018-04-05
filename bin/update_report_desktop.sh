#!/bin/bash

export DATE=`date '+%Y-%m-%d_%H-%M-%S'`

mkdir ./reports/$DATE-desktop
ed -s reports/index.html <<- EOM
/<\/ul>/i
    <li>
      <a href="./$DATE-desktop/lifehacker.ru-desktop_$DATE.html">
        lifehacker.ru-desktop-$DATE
      </a>
    </li>
.
wq
EOM
