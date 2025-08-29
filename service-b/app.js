const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/transaction', (req, res) => {
  const { amount, account } = req.body;
  // Xử lý giao dịch
  res.status(200).send('Giao dịch thành công!');
});

app.listen(PORT, () => {
  console.log(`Service B listening at http://localhost:${PORT}`);
});