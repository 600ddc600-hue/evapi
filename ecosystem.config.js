module.exports = {
  apps: [{
    name: "ApiEvolution",
    script: "./dist/main.js",
    node_args: "--max-old-space-size=2048",
    env: {
      UNDICI_NO_WASM: "1",
      PRISMA_FORCE_BINARY: "true",
      NODE_ENV: "production"
    }
  }]
}
