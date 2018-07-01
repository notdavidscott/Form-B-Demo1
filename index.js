const express = require('express'); 
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const Sequelize = require('Sequelize');
const app = express();


const handlebars = require('express-handlebars').create({
    defaultLayout: 'main'
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

const sequelize = new Sequelize('Music', 'David', null, {
    host: 'localhost',
    dialect: 'sqlite',
    storage: '/Users/DavidScottPerez/Desktop/CODING!/Form-B-Demo1/FormBDataBase.sqlite'
}); //end

//start models
/*
const Form = sequelize.define(
    'Form',
    {
        FormId: {
            type: Sequelize.INTEGER,
            autoIncrement: true, 
            primaryKey: true
        },
        Name: Sequelize.STRING,
    },
    {
        freezeTableName: true, 
        timestamps: false
    }
);

//end models
*/
//display page
app.get('/allForms', (req, res) => {

    res.render('allForms');
});

app.get('/newForm', (request, response) => {
    response.render('newForm');
});


app.use((req, res) => {
    res.status(404);
    res.render('404');
});

//begin listener
app.listen(app.get('port'), () => {
    console.log(
        '>>>> Server Start. . . . . . Successful >>>> begin now >>>>'
    );
});
