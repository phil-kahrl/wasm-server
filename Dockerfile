FROM scratch
COPY ./target/wasm32-wasi/release/server.wasm /start.wasm
ENTRYPOINT [ "/start.wasm" ]
