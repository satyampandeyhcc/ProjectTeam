const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require('./db')
app.use(express.json())

const adminAuthRoute = require('./routes/adminAuthRoute');

app.use('/api/cars/' , require('./routes/bikesRoute'))
app.use('/api/users/' , require('./routes/usersRoute'))
app.use('/api/bookings/' , require('./routes/bookingsRoute.js'))
// app.use('/api/Contact/' , require('./routes/contactRoute'))
app.use('/admin/auth', adminAuthRoute);
const cors = require('cors');  
app.use(cors());
app.use((req, res, next) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

const path = require('path')

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })

}

app.get('/', (req, res) => res.send('Hello World!'))


 


app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))