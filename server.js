const express = require('express');
const shell = require('shelljs');
const fs = require('fs');


const app = express();
const path = '../../Downloads/';


app.get('/', (req, res) => {
    var result = [];
    fs.readdir(path, (err, data) => {
        if(err) return res.send.json(err);
        data.map( datum => {
            fs.readdir(path+datum, (error, stats) => {
                if(stats == undefined) {
                    console.log(path+datum, '<<<< this is file');
                } else {
                    stats.map( stat => {
                        console.log(stat, '<<<<< this is file inside directory');
                    })
                }
            })
        })
    });
    res.send(result);
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`You listening to port ${port}`);
})
