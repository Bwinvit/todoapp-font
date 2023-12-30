#!/bin/bash

# npm run build:prod

# docker build -t pwinvit/todo-front:prod -f Dockerfile.prod .

# docker push pwinvit/todo-front:prod

npm run build:dev

docker build -t pwinvit/todo-front:dev -f Dockerfile.prod .

docker push pwinvit/todo-front:dev
