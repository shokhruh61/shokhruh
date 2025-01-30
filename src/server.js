const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let users = [];  // Bu faqat test uchun, haqiqiy loyiha uchun database kerak bo'ladi.

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Foydalanuvchi nomi va parol kerak' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: 'Ro\'yxatdan o\'tgan foydalanuvchi' });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(400).json({ message: 'Foydalanuvchi topilmadi' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Noto‘g‘ri parol' });
    }

    const token = jwt.sign({ username: user.username }, 'secretkey', { expiresIn: '1h' });
    res.json({ token });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server ishlayapti port ${PORT}`);
});
