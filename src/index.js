const express = require('express');
const s = require('./config/serverConfig.js');
const route = require('./routes/route.js');
const {getData} = require('./controllers/control.js');

const app = express();

app.use("/api/v1", route);

app.listen(s.PORT, () => {
    console.log(`Server is running on port ${s.PORT}`);
});