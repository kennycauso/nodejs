// ACTIVITY NODEJS - KENNY CAUSO

const express = require('express');

const app = express();

app.get('/me', (req, res) => {
    res.status(200).json({
        name: "kenny",
        age: "33",
        country: "Perú"
    });
});
app.post('/metas', (req, res) => {
    res.status(200).json({
        hobby1: "walk",
        hobby2: "programming",
        hobby3: "watch videos"
    });
});
app.patch('/metas', (req, res) => {
    res.status(200).json({
        goal1: "be a leader",
        goal2: "always positive"
    });
});
app.put('/business', (req, res) => {
    res.status(200).json({
        company1: "google",
        company: "amazon"
    });
});

app.listen(8000, () => {
    console.log("server active port 8000")
});