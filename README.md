# wasm-server

A simple http server that compiles to a wasm/wasi runtime

## Developer Instructions

Building this package requires the Rust/Cargo toolchain installed locally, with the `wasm32-wasi` compile target installed.

`rustup target add wasm32-wasi`

will add the wasm target.

## Build

`cargo build --target wasm32-wasi --release`

## Run with a locally installed wasm runtime

`wasmedge target/wasm32-wasi/release/server.wasm `

## Build and Run with wasmedge From a Docker runtime

`docker build -t wasmedge/myapp -f Dockerfile ./`

`docker run --rm -p 1234:1234 wasmedge/myapp`