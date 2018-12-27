FROM nginx:alpine
MAINTAINER Jacob Cavazos <jake@jacobcavazos.com>
COPY /build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
