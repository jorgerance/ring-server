const express = require('express');
const app = express();
const RingApi = require('ring-client-api').RingApi;
const fs = require('fs');

require('dotenv').config();

// Routes
const indexRouter = require('./routes/indexRouter.js');
const apiRouter = require('./routes/apiRouter.js');

app.use(express.static(__dirname + '/public'));
app.set('view-engine', 'ejs');

const ringApi = new RingApi({
    refreshToken: process.env.REFRESHTOKEN
})
async function cameras() {
    await ringApi.getCameras()
        .then(async data => {
            for (var i = 0; i < data.length; i++) {
                if (data[i].name === 'Backyard') {
                    console.log(await data[i].getSnapshot());
                }
            }
        })
}
cameras()

// Initialize the routers
app.use('/', indexRouter);
app.use('/api', apiRouter)

app.listen(3000, () => console.log('Server started on port 3000'));