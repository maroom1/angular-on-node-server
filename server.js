const express = require('express');
const fs = require('fs');
const app = express();
const ejs = require('ejs');
const props=require('./properties.json');

app.use('/dist',express.static('dist'));
app.use('/header', express.static('header'));

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('views', __dirname + '/dist');

app.get('/**', (req,res) => {
    console.log('info', 'Hostname is: ' + req.hostname);
    console.log('info', 'Req URL: ' +  req.url)
    console.log('info', 'Headers: ' + JSON.stringify(req.headers));
    // banner
    let banner = 'satic text';
    

    console.log('info','Banner is: ' + banner);
    res.render('index', {
        banner: banner,
        footerFragment: props.header
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('info', 'Server started on port: ' + (process.env.PORT || 3000));
    });
