const fortune = require('./cookie')


console.log(fortune.getFortune())
const express = require('express');
const path = require('path');
const app = express();
const port = 3002;
const root = path.join(__dirname, 'public')

app.use(express.static(root));

app.get('/', (req, res) => {
    res.sendFile('index.html', root)
})

app.get('/api/v1/random-joke', (req, res) => {
    const randomIndex = Math.floor(Math.random() * Jokes.length)
    res.send(Jokes[randomIndex])
})

// Start the server
app.listen(port, () => { console.log(`http://localhost:${port}/api/v1/random-joke`) })

const Jokes = [
    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
        id: 3,
        joke: "What do you call fake spaghetti?",
        punchline: "An impasta!"
    },
    {
        id: 4,
        joke: "Why can't you give Elsa a balloon?",
        punchline: "Because she will let it go."
    },
    {
        id: 5,
        joke: "How does a penguin build its house?",
        punchline: "Igloos it together."
    },
    {
        id: 6,
        joke: "Why don't skeletons fight each other?",
        punchline: "They don't have the guts."
    },
    {
        id: 7,
        joke: "What do you get when you cross a snowman with a vampire?",
        punchline: "Frostbite."
    },
    {
        id: 8,
        joke: "Why was the math book sad?",
        punchline: "Because it had too many problems."
    },
    {
        id: 9,
        joke: "How do you organize a space party?",
        punchline: "You planet."
    },
    {
        id: 10,
        joke: "What did one wall say to the other wall?",
        punchline: "I'll meet you at the corner."
    }
]

