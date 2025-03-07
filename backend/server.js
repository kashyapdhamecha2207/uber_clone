// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 9090;

// app.use(express());

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });




const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});