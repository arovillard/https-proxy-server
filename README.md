# https-proxy-server

Small Express app that proxies requests to a given URL over HTTPS.

## Getting Started

### Configuration

The proxy server can be configured using environment variables. These can be set inline or added to a `.env` file in the project root.

- `PROXY_URL`: the destination URL (required)
- `PORT`: Port to run the server on (optional; defaults to `3000`)

### Scripts

#### `npm start`

Starts the proxy server.
