const express = require('express');
const app = express();

// Routes
const indexRouter = require('./routes/indexRouter.js');
const apiRouter = require('./routes/apiRouter.js');

app.use(express.static(__dirname + '/public'));
app.set('view-engine', 'ejs');

app.use('/', indexRouter);
app.use('/api', apiRouter)

app.listen(3000, () => console.log('Server started on port 3000'));