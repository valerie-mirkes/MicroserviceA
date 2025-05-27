const express = require('express');
const app = express();
app.use(express.json());


const scores = {};


app.post('/score', (req, res) => {
    const { userId, points } = req.body;

    if (typeof userId !== 'string' || typeof points !== 'number') {
        return res.status(400).json({ error: 'Invalid input' });
    }

    scores[userId] = (scores[userId] || 0) + points;
    return res.status(200).json({ userId, points, total: scores[userId] });
});


app.get('/score/:userId', (req, res) => {
    const { userId } = req.params;

    if(!userId) {
        return res.status(400).json({ error: 'userId is required' });
    }
    if (!(userId in scores)) {
        return res.status(404).json({ error: 'No scores found for this user' });
    }
    return res.status(200).json({ scores: scores[userId] });
}
);


app.post('/reset', (_req, res) => {
    Object.keys(scores).forEach(userId => delete scores[userId]);
        return res.status(200).json({ message: 'Scores reset successfully' });
    });


app.listen(8000, () => 
    console.log('Server is running on port 8000'));



