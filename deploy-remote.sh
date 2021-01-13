#!/bin/bash -e
set -e;

export DEPLOYMENT=$1
export SERVER=zeno.brightblock.org
if [ "$DEPLOYMENT" == "prod" ]; then
  SERVER=hume.brightblock.org;
fi

printf "\n-----------------------------------------------------------------------------------------------------\n";
printf "Running script: $0 \n";
printf "Deploying to: $SERVER \n";
printf "\n-----------------------------------------------------------------------------------------------------\n";

function __pushcode() {
  printf "\n- deploying from pipeline build \n";
  rsync -aP -e "ssh  -p 7019" ./index.html bob@$SERVER:/var/www/vanilla
}

__pushcode

exit 0;
