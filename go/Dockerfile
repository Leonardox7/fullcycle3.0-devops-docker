FROM golang:alpine AS builder

WORKDIR /app
COPY . .
RUN go build

FROM scratch

WORKDIR /app
COPY --from=builder /app/desafio .
ENTRYPOINT [ "./desafio" ]

