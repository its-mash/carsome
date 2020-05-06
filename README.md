# API Documentaion


## Geting start guide

Requirements:
   1. Node.Js 13.0.0 above

Update .env file configuration & run bellow command

`npm install`

`npm start`

API will be available at http://localhost:300
## To Book a slot

```
curl --location --request POST 'http://localhost:3000/inspection' \
--header 'Content-Type: application/json' \
--data-raw '{
	"date":"2020-05-22",
	"time":"4.30 PM"
}'
```

## To get disabled dates within 3 weeks from today
```
curl --location --request GET 'http://localhost:3000/disabled-dates'
```

## To get available time slots on specific {date}

```
curl --location --request GET 'http://localhost:3000/available-slots/{date}'
```