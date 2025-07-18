FROM nginx:alpine

COPY . /usr/share/nginx/html/paste/
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
