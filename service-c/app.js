const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/data', (req, res) => {
  // Cung cấp dữ liệu
  res.status(200).send({ data: 'Dữ liệu từ Service C' });
});

app.listen(PORT, () => {
  console.log(`Service C listening at http://localhost:${PORT}`);
});