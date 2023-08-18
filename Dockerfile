FROM cloudron/base:4.1.0@sha256:a4c6b065cb228ba677ab822fc830579fdabe396920487ecdc2e4a059b76c0143

RUN mkdir -p /app/code
WORKDIR /app/code
COPY ./build /app/code
RUN npm i -g serve

CMD [ "serve", "-s", "/app/code" ]
