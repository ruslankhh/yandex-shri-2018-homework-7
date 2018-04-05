#!/bin/bash

export DATE=`date '+%Y-%m-%d_%H-%M-%S'`

mkdir ./reports/$DATE
ed -s reports/index.html <<- EOM
/<\/ul>/i
    <li>
      <a href="./$DATE/lifehacker.ru_$DATE.html">
        lifehacker.ru_$DATE
      </a>
    </li>
.
wq
EOM
