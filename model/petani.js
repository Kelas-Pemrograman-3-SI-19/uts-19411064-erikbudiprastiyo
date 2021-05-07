const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petaniSchema = new Schema({
    nama_petani: {
        type : String,
    },
    alamat_petani : {
        type : String,
    },
    jenis_hasil_pertanian : {
        type : String,
    },
    password: {
        type : Number,
    },
    No_hp: {
        type : Number,
    }
    
})

module.exports = mongoose.model('petani', petaniSchema)