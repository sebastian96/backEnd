const express = require('express');
const morgan = require('morgan');

const app = express();

//---- SETTINGS----
app.set('port', process.env.PORT || 4000);

//----MIDDLEWARES----
app.use(morgan('dev'));

//----ROUTES----
app.use(require('./routes'));

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});



