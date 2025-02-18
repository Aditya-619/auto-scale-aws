const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello devs!!');
});

app.get("/product", (req, res) => {
    res.send("This is Product Page");
  })
  
  app.get("/health", (req, res) => {
    res.send("health status: OK");
  })

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});