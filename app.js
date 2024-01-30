const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()


app.use(cors());
app.use(bodyParser.json());


require('./app/routes/user')(app);
require('./app/routes/auth')(app);




app.get('*', (req, res) => {
    res.status(400).send({
        message: 'Humm smart',
        error: true1
    })
});


app.listen(5500, () => console.log(`Server is running port on 5500`))
