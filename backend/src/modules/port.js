module.exports = {
    port: process.env.PORT || 3000,
    start: () => {
        console.log(`Starting server on port: ${process.env.PORT}`)
    }
}