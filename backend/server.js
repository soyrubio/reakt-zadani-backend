const app = require('./app')
const config = require('./server-config.json');

const PORT = process.env.PORT || config.port

// since app is pretty simple
// app.listen should be enough
app.listen(PORT, () => {
    console.log(`Reakt backend started on port ${PORT}`)
})