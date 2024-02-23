# Play-with-NGINX

pull NGINX image:
```
docker pull nginx
```
spin up docker container:
```
docker run -it --rm -d -p 8000:80 --name website nginx
```

## for server Dockerfile
### build the image
```
docker build . -t myserver
``` 
### to run containers (make port mapping to spin up multiple instances of our app)
```
docker run --name first-container -p 1111:5555 -d myserver
```
```
docker run --name second-container -p 2222:5555 -d myserver
```
```
docker run --name third-container -p 3333:5555 -d myserver
```
```
docker run --name fourth-container -p 4444:5555 -d myserver
```
