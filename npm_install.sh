#!/bin/sh

printf "\n==============================\nINSTALLING NPM PACKAGES.....\n==============================\n"
cd backend && 
pwd && 
npm ci && 
printf "\n==============================\n" && 
cd ../frontend && 
pwd && 
npm ci && 
printf "\n==============================\n" && 
printf "\n\nSuccessfully installed npm packages!\n"

exit 0