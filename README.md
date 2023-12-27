`cargo build --target wasm32-wasi --release`

`docker buildx build --platform wasi/wasm --provenance=false -t test6 .`

`docker run --rm --runtime=io.containerd.wasmtime.v1 --platform=wasi/wasm   test6 -i`