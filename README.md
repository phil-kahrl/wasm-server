`cargo build --target wasm32-wasi --release`

`docker build -t wasmedge/myapp -f Dockerfile ./`

`docker run --rm -p 1234:1234 wasmedge/myapp`