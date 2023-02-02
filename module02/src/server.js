import express from 'express';
import React from "react";
// this will do the actual app rendering:
import { renderToString } from "react-dom/server";

const app = express();
const port = 8080;

// catch ALL the get requests on any path
app.get('/*', (req, res) => {
  // convert JSX into HTML string:
  const reactApp = renderToString(
    <h1>Hello from the server side</h1>
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