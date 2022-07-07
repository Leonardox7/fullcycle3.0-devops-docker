FROM node:latest AS builder

WORKDIR /app
COPY . .
RUN npm install

FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
ENTRYPOINT [ "node", "app.js" ]