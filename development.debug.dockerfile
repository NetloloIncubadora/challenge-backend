###################################################################
#   Here we will use the latest LTS (long term support)           #
# version carbon of node available from the Docker Hub:           #
###################################################################
FROM node:alpine

###################################################################
#  The name will maintainer this project                          #
###################################################################
LABEL maintainer "Astésio José do Carmo Júnior <astesiojose@gmail.com>"
LABEL version="1.0"
LABEL description="this is an simple test api-challenge-chackend"

###################################################################
#  Create app directory                                           #
###################################################################
WORKDIR /usr/src/api-challenge-backend

###################################################################
#   A wildcard is used to ensure both package.json AND            #
# package-lock.json are copied                                    #
# where available (npm@5+)                                        #
###################################################################
COPY package*.json ./
COPY npm-shrinkwrap.json ./

###################################################################
# Install nodemon                                                 #
###################################################################
RUN npm install nodemon -g

###################################################################
# Install dependencies                                            #
###################################################################
RUN npm install

###################################################################
# Bundle app source                                               #
###################################################################
COPY . .

EXPOSE 49160
EXPOSE 9229

###################################################################
# Define variables environment                                    #
###################################################################

# api
ENV SERVICE_NAME='api-challenge-backend'

# host server
ENV app_host=0.0.0.0
ENV app_port=49160
ENV request_timeout=30000
    
# RUN ["apt-get", "update"]
# RUN ["apt-get", "install", "-y", "vim"]

######################################################################
# The first process inside of a Docker container will be PID 1.      #
# The Linux kernel gives PID 1 special treatment, In Docker, the     #
# philosophy of “one process per container” is built around the      #
# concept of keeping the individual components of an application     #
# stack scalable and individually deployable. A simple init process  #
# could be added that's designed to run as PID 1 into a Docker       #
# container without breaking that philosophy.                        #
######################################################################

# ADD https://github.com/Yelp/dumb-init/releases/download/v1.1.1/dumb-init_1.1.1_amd64 /usr/local/bin/dumb-init
# RUN chmod +x /usr/local/bin/dumb-init

#####################################################################
#  Created a new user no root, a simple solution for security image #
#####################################################################
# RUN groupadd -r nodejs && useradd -m -r -g nodejs nodejs
# USER nodejs

CMD ["nodemon", "--inspect=0.0.0.0:9229","index.js"]