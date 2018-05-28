
#!/usr/bin/env bash

###################################################################
# stop our container and remove the container                     #
###################################################################

docker stop -t 0 api-challenge-backend && docker rm api-challenge-backend