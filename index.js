const express = require('express');
const path = require('path');
const app = require('./api/bfhl');

const server = express();
server.use(express.static(path.join(__dirname, 'public')));
server.use('/api', app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
