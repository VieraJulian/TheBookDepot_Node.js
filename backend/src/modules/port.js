module.exports = {
    port: process.env.PORT || 8000,
    start: () => {
        console.log(`Starting server on port: ${process.env.PORT || 8000}`);
    }
}