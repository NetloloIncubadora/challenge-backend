
#!/usr/bin/env bash

#####################################################################
# This command will create a container for ours in port 49160        #
# in my host point for 49160 port container, and ours will name      #
# api-challenge-backend for ours container, another point is that ours load. #
#####################################################################

docker run -d --name api-challenge-backend -v $(pwd):/usr/src/api-challenge-backend -p 49160:49160 -p 9229:9229 api-challenge-backend