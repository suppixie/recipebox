const express = require('express');
const server = express();

const port=process.env.port ||5000
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });