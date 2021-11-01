const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('./router')(app);

const PORT = 3456;
app.listen(PORT,() => {
    console.log(`Server is listening to port ${PORT}`)
})