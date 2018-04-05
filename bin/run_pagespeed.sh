#!/bin/bash

export TARGET_URL=lifehacker.ru

echo '> psi '$TARGET_URL' --strategy=mobile'
psi $TARGET_URL --strategy=mobile

echo ''
echo '> psi '$TARGET_URL' --strategy=desktop'
psi $TARGET_URL --strategy=desktop
