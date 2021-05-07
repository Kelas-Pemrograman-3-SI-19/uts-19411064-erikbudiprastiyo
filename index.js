const express = require('express')
const app = express()

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/pemasaran_hasil_pertanian', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Berhasil Konek Ke Database'))
.catch((err) => console.log('Gagal Konek ke database'))

app.use(express.json({
    extended: true,
    limit: '20mb'
}))

app.use(express.urlencoded({
    extended: true,
    limit: '20mb'
}))

// app.get('/', (req, res) => {
//     res.send('Hello World')    
// })

// app.get('/profile/:username/:id', (req, res) =>{
//     console.log(req.params)
// })

// app.post('/register', (req, res) => {
//     console.log(req.body)
// })

app.use('/petani', require('./routes/petani'))

app.listen(3000, () => {
    console.log('server started')
})