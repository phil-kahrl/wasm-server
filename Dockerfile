FROM wasmedge/slim-runtime:0.10.1
ADD ./target/wasm32-wasi/release/server.wasm /start.wasm
CMD ["wasmedge", "--dir", ".:/", "/start.wasm"]
