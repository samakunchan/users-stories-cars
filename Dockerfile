FROM node:14.6.0-alpine3.12 as builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.18.0-alpine

COPY --from=builder /usr/src/app/dist/users-stories-cars/ /usr/share/nginx/html

# docker build -t users-stories-cars .
# docker run -p 3000:80 users-stories-cars
