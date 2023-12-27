FROM scratch
COPY ./target/wasm32-wasi/release/wasm-server.wasm /start.wasm
ENTRYPOINT [ "/start.wasm" ]
