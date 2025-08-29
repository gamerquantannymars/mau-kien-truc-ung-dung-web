const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Xử lý đăng nhập
  res.status(200).send('Đăng nhập thành công!');
});

app.listen(PORT, () => {
  console.log(`Service A listening at http://localhost:${PORT}`);
});