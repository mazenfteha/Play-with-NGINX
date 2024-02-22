http {

    include mime.types;

    server {
        listen 8081;
        root C:/Users/LENOVO/Desktop/Play-with-NGINX;
        index index.html;

        rewrite ^/number/(\w+) /count/$1;


        location /fruits {
            root C:/Users/LENOVO/Desktop/Play-with-NGINX;
        }

        location /carbs {
            alias C:/Users/LENOVO/Desktop/Play-with-NGINX/fruits;
        }

        location /vegetables {
            root C:/Users/LENOVO/Desktop/Play-with-NGINX;
            try_files /vegetables/veggies.html /index.html = 404;
        }

        location crops {
            return 307 /fruits;
        }
    }
}

events {}