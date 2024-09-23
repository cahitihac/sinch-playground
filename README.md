# Sinch Playground

## Overview

**Sinch Playground** is a Node.js application designed to experiment with Sinch services.

## Installation

To install the necessary dependencies, run:

```bash
npm install
```

## Usage

To build the project, use:

```bash
npm run build
```

To start the application, use:

```bash
npm start
```

## Scripts

- `build`: Compiles the TypeScript code using `tsc -p tsconfig.json`.
- `start`: Runs the compiled JavaScript code using `node index.js`.

## ngrok

To test webhooks locally, you can use `ngrok` to expose your local server to the internet. Follow these steps:

1. Install `ngrok` by following the instructions on the [ngrok website](https://ngrok.com/download).

2. Start your local server:

```bash
npm start
```

3. In a new terminal window, start `ngrok` on the port your local server is running (e.g., 3000):

```bash
ngrok http 3000
```

4. `ngrok` will provide a forwarding URL. Use this URL to configure your webhook endpoints. For example:

```
Forwarding                    https://abcd1234.ngrok.io -> http://localhost:3000
```

5. Set the webhook URL in your Sinch service to the `ngrok` forwarding URL.

Now, your local server can receive webhook events from Sinch services.

## License

This project is licensed under the ISC License.
