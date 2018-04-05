#!/bin/bash

export TARGET_URL=lifehacker.ru
export DATE=`date '+%Y-%m-%d_%H-%M-%S'`

lighthouse -n --config-path=lighthouse.config.js https://$TARGET_URL --output-path=$PWD/reports/$DATE-mobile-$TARGET_URL.html --view

lighthouse -n --config-path=lighthouse.config.js https://$TARGET_URL --output-path=$PWD/reports/$DATE-desktop-$TARGET_URL.html --disable-device-emulation --disable-network-throttling --view

ed -s ./reports/index.html <<- EOM
/<!-- END REPORTS LIST -->/i
      <li>
        <a href="$DATE-mobile-$TARGET_URL.html">
          $DATE-mobile-$TARGET_URL
        </a>
      </li>
      <li>
        <a href="$DATE-desktop-$TARGET_URL.html">
          $DATE-desktop-$TARGET_URL
        </a>
      </li>
.
wq
EOM
