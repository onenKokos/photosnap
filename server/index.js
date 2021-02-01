/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const compression = require('compression');

const next = require('next');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

/*
  Todo: write custom api as to not make apikey public

  const customHandler = (req, res) => {
  console.log(process.env.API_KEY);
  return process.env.API_KEY;
}; */

app
  .prepare()
  .then(() => {
    const server = express();

    // taken from zeit official: https://github.com/zeit/next.js/wiki/Getting-ready-for-production
    if (!dev) {
      server.use(compression);
    }

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) {
        throw err;
      }

      console.log(`[server]: >> Ready on port: ${PORT}`); // eslint-disable-line no-console
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
