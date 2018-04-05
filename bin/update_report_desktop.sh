#!/bin/bash

export DATE=`date '+%Y-%m-%d_%H-%M-%S'`

ed -s ./reports/index.html <<- EOM
/<!-- END REPORTS LIST -->/i
      <li>
        <a href="$DATE-desktop-lifehacker.ru.html">
          $DATE-desktop-lifehacker.ru
        </a>
      </li>
.
wq
EOM
