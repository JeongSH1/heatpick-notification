FROM node:18

RUN apt-get update && apt-get install -y redis-server

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# 컨테이너가 시작될 때 실행할 명령을 설정합니다.
CMD ["sh", "-c", "redis-server --daemonize yes && npm start"]
