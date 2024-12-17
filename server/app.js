

import express from 'express'
const app = express();

app.use(express.json());

const PORT = process.env.PORT;


app.get('/', (req, res) => {
    res.send(`Welcome to express app!`);
});

app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({
        id: userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`
    });
});

app.post('/api/users', (req, res) => {
    const { name, email } = req.body;

    res.status(201).json({
        message: 'User created successfully!',
        user: {
            id: Date.now(), 
            name,
            email
        }
    });
});

app.listen(PORT, () => {
    console.log(`express is running on http://localhost:${PORT}`);
});
