// npx babel-node src/server.js
// npx nodemon --exec npx babel-node src/server.js

import express from 'express';
import React from "react";
// this will do the actual app rendering:
import { renderToString } from "react-dom/server";
import { Home } from '../src/pages/Home';
// SSR equivalent of BrowserRouter:
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App';
import path from 'path';
import fs from 'fs';

const app = express();
const port = 8080;

// tells express to static serve the files inside that folder
// For default if the specified folder has an index.html, that's the one it's going to serve
// index: false, prevents this, so we can use our index.html
app.use(express.static('./build', { index: false }));

// catch ALL the get requests on any path
app.get('/*', (req, res) => {
  // convert JSX into HTML string:
  const reactApp = renderToString(
    // location let StaticRouter know the requested url:
    <StaticRouter location={req.url}>
      {/* inside App we remove the BrowserRouter component */}
      <App />
    </StaticRouter>
  );

  const templateFile = path.resolve('./build/index.html');
  fs.readFile(templateFile, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    // send the templateFile with the original div, but we replace it with our already rendered react app
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
    )
  })
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}) 