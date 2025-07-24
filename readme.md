# Connect Backend with IP address
## Basic Backend 
Backend is running on port 3000

Single will send message '/' route
```
{
  "message": "Hello, World!"
}
```

## Basic Frontend 
Basic frontend used 

Requesting for api for data using IP

## This is very bad way to connect different services 

Next we will crate Docker Network

So application can communicate


# Docker networking

Crate Own Network so container can communicate with in network
```
docker network create network-name
```
run application in that network and give host name to that container so application will be able to send request to that container
```
docker run -d --name hostname --network app-name
```
Request url will be 
```
http://hostname:port
```

independent