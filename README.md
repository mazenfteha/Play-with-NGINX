# Play-with-NGINX

pull NGINX image:
```
docker pull nginx
```
spin up docker container:
```
docker run -it --rm -d -p 8000:80 --name website nginx
```