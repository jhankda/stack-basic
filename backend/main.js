import express from "express";

const app = express();

//app.use(express.static('dist'))

//app.get('/',(req,res)=>{
//    res.send('server is ready')
//});

// get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [{ 

        id:1,
        title:'this is a joke',
        content:'we laugh'
    },
    {
        id:2,
        title:'this is another joke',
        content:'we laugh again'
    },
    {
        id:3,
        title:'this is also a joke',
        content:'we can\'t breathe'
    },
    {
        id:4,
        title:'still reading',
        content:'jokes on you'
    }
    ];
    res.send(jokes);

});
const port= process.env.PORT || 3000;

app.listen(port,() => {
    console.log('serve at http://localhost:${port}');
});
