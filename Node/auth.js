const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  req.session.userId = user.id;
  res.json({ message: 'Logged in successfully' });
});

// GET /api/auth/logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.json({ message: 'Logged out successfully' });
});

module.exports = router;