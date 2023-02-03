// npx babel-node src/server.js
// npx nodemon --exec npx babel-node src/server.js

import express from 'express';
import React from "react";
// this will do the actual app rendering:
import { renderToString } from "react-dom/server";
import { Home } from '../src/pages/Home';

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
    <Home />
  );

  return res.send(`
  <html>
    <body>
      <div id='root'>${reactApp}</div>
    </body>
  </html>
  `)
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})