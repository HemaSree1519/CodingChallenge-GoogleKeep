FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 1234

# Start Nginx when the container has provisioned.
CMD ["nginx", "-g", "daemon off;"]