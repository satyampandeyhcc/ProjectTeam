const express = require('express')
const cron = require('node-cron');
const moment = require('moment');
const app = express()
const port =  5000;
const dbConnection = require('./db')
const cors = require('cors');
const Bike = require('./models/bikeModel.js');

app.use(express.json());
app.use(cors());
app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type"],
    })
  );
  
  
const adminAuthRoute = require('./routes/adminAuthRoute');

app.use('/api/bikes/' , require('./routes/bikesRoute'))
app.use('/api/users/' , require('./routes/usersRoute'))
app.use('/api/bookings/' , require('./routes/bookingsRoute.js'))
// app.use('/api/Contact/' , require('./routes/contactRoute'))
app.use('/admin/auth', adminAuthRoute);


// const cors = require('cors');  
// app.use(cors());
// app.use((req, res, next) => {

//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// */5 * * * * *
cron.schedule('0 0 * * *', async () => {  // Task to be executed every day at midnight
  try {
    // Get all bikes from the database
    const bikes = await Bike.find();

    // Iterate over each bike
    for (const bike of bikes) {
      // Iterate over each booked time slot of the bike
      for (const booking of bike.bookedTimeSlots) {
        const bookingTo = moment( booking.to, 'MMMM DD YYYY HH:mm');
        const today = moment();

        // If today's date is greater than the booking end date, increase the capacity by 1
        if (today.isAfter(bookingTo)) {
          // Remove the booking from the array
          bike.bookedTimeSlots = bike.bookedTimeSlots.filter(
            (slot) => slot.to !== booking.to && slot.from !== booking.from
          );

          bike.capacity += 1;
          await bike.save();
          console.log(`Capacity of bike ${bike._id} increased by 1`);
          console.log(`Booking from ${booking.from} to ${booking.to} deleted for bike ${bike._id}`);
          break; // No need to check further bookings for this bike
        }
      }
    }
  } catch (error) {
    console.error('Error updating capacities:', error);
  }
});

// console.log('Capacity updater started.');



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