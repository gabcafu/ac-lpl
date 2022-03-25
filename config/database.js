const mongoose = require('mongoose')
const conexao = async() => {
    var atlas = await mongoose.connect('mongodb+srv://useradimim:admin12345@gabonito.th4xf.mongodb.net/test')
}

module.exports = conexao