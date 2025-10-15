const express = require('express');
const app = express();

const PORT = 3000;

// Host the public directory
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});