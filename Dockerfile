FROM node:18

FROM redis:latest
EXPOSE 6379

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# 컨테이너가 시작될 때 실행할 명령을 설정합니다.
CMD ["npm", "start"]
