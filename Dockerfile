# use a node base image
FROM node:7-onbuild

#set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://localhost:3000 || exit 1

#tell docker what port to expose
EXPOSE 3000
