

const getFortune = () => {
    const fortunes = require('./fortunes.json')
    const rand = Math.floor(Math.random() * fortunes.length) // I got undifined with the "+ 1" so I left it off
    return fortunes[rand]
}

module.exports = {getFortune}