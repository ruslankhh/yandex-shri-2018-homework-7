#!/bin/bash

export DATE=`date '+%Y-%m-%d_%H-%M-%S'`

mkdir ./reports/$DATE-mobile
ed -s ./reports/index.html <<- EOM
/<!-- END REPORTS LIST -->/i
      <li>
        <a href="$DATE-mobile/$DATE-mobile-lifehacker.ru.html">
          $DATE-mobile-lifehacker.ru
        </a>
      </li>
.
wq
EOM
