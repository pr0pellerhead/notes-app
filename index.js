const express = require('express');

let api = express();

api.get('/', (req, res) => {
    res.status(200).send('Say hello to my heroku friend!');
});

api.listen(process.env.PORT || 8080, err => {
    if(err){
        console.log(err);
        return;
    }
    console.log('Heroku service started!')
});