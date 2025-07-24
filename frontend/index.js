const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index', { title: 'Home Page' });
});

app.get('/getdata', (req, res)=>{
    fetch("http://backend:3000/")
    .then(response => response.json())
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error); 
        res.status(500).json({ error: 'Failed to fetch data' });
    });
});

app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`);
});
