const express = require('express');
const path = require('path');
// const dbs = require('mongodb');

const app = express();

const PORT = process.env.PORT || 8080


app.use(express.json());
app.use(express.urlencoded({extended: true}))

//health check
app.get('/health', (req, res)=>{
  res.send("hello shhs")
});

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{
  console.log(`server listening at ${PORT}`);
})