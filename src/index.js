const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200
}

const app = express();

//---- SETTINGS----
app.set('port', process.env.PORT || 4000);

//----MIDDLEWARES----
app.use(morgan('dev'));
app.use(cors(corsOptions));

//----ROUTES----
app.use(require('./routes'));

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});



