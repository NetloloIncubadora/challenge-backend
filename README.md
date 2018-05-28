# API-CHALLENCE-BACKEND

## Introduction Docker

If you have a docker in your machine so run commands below

`sh scripts/debugger/01-create-container-image.sh`

After command above was execute sucsess run command below

`sh scripts/debugger/02-start-container-service.sh`

You see in your terminal something like that

`fae8e01ff65299284d05c26ea7c4f2f8efc02a51a05e0d0208556bcb0f9e6d8d`

So, now if you can stop the container enough run command below

`sh scripts/debugger/03-remove-container-service.sh`

Or if you can see logs the container enought

`sh scripts/debugger/show-logs.sh`

In this project you has folder called .vscode in this folder you have file that launch.json vscode for debug autoreload inside container.

## Introduction Node

If you have do not have docker, also it is simple.

You need install depedencies for this project in root folder

`npm install`

If you see test run command below

`node index`

## Introduction Node with PM2

Here you need install PM2 globally for execute npm scritps commands

`npm i pm2 --g`

You need install depedencies for this project in root folder

`npm install`

Now I will brief description commands npm. So you need run command `npm run` plus below

* start `init the project`
* list `list all process in your machine`
* monit `Here you can see a brief status your machine with your api`
* stop `Stop the process of the api`
* remove `remove all process the queue pm2`
* test `run test unit`
* coverage `run test coverage`

## Routes this project

This project make use swagger you can see

`http://your-host:49160/documentation/`.

Another cool thing and the concept of version routes, in the future I can show another routes versions. But today I have one version

#### Root router

`http://your-host:49160/v1`

you see message in your browser

`The plot device and I will be your guide. {development} api-challenge-backend`

#### ASKS

Here we all asks

`http://your-host:49160/v1/api/asks`

order by `asc` and `desc`

`http://your-host:49160/v1/api/asks?order=asc` and `http://your-host:49160/v1/api/asks?order=desc`

You also search values one or more, see some examples

`http://127.0.0.1:49160/v1/api/asks/values=453002`,

output `Sorry but I don't found anything`

`http://127.0.0.1:49160/v1/api/asks/values=45300`,

output `[45300]`

`http://127.0.0.1:49160/v1/api/asks/values=45300&values=75270`

output `["45300","75270"]`

Also we can price routes

show all prices

`http://127.0.0.1:49160/v1/api/asks/prices`

order by `asc` and `desc`

`http://127.0.0.1:49160/v1/api/asks/prices?order=asc` and
`http://127.0.0.1:49160/v1/api/asks/prices?order=desc`

You also search values one or more, see some examples

`http://127.0.0.1:49160/v1/api/asks/prices/values=23232323`,

output `Sorry but I don't found anything`

`http://127.0.0.1:49160/v1/api/asks/prices/values=30.45895823`,

output `[30.45895823]`

`http://127.0.0.1:49160/v1/api/asks/prices/values=30.45895823&values=18.13769749`

output `["30.45895823","18.13769749"]`


#### BIDS

Here we all bids

`http://127.0.0.1:49160/v1/api/bids/prices`

order by `asc` and `desc`

`http://127.0.0.1:49160/v1/api/bids/prices?order=asc` and `http://127.0.0.1:49160/v1/api/bids/prices?order=desc`

You also search values one or more, see some examples

`http://127.0.0.1:49160/v1/api/bids/values=4500033`,

output `Sorry but I don't found anything`

`http://127.0.0.1:49160/v1/api/bids/values=45000`,

output `[45000]`

`http://127.0.0.1:49160/v1/api/bids/values=45000&values=44200`

output `["45000","44200"]`

Also we can price routes

show all prices

`http://127.0.0.1:49160/v1/api/bids/prices`

order by `asc` and `desc`

`http://127.0.0.1:49160/v1/api/bids/prices?order=asc` and
`http://127.0.0.1:49160/v1/api/bids/prices?order=desc`

You also search values one or more, see some examples

`http://127.0.0.1:49160/v1/api/bids/prices/values=23232323`,

output `Sorry but I don't found anything`

`http://127.0.0.1:49160/v1/api/bids/prices/values=71380.20899968`,

output `[71380.20899968]`

`http://127.0.0.1:49160/v1/api/bids/prices/values=71380.20899968&values=950`

output `["71380.20899968","950"]`

## License

MIT