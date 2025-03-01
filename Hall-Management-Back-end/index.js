// const express = require('express');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const cors= require('cors');
// require('dotenv').config();
// const app = express()
// const port = process.env.PORT || 5000;

// //StudetDetails
// //yzlxTD8IwTrvRnkt

// console.log(process.env.DB_USER ,process.env.DB_PASS);

// //mongodb connection

// const uri = `mongodb+srv://${process.env.DB_USER }:${process.env.DB_PASS}@cluster0.a35pwem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// console.log(uri);
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);





// //middleware
// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('basic server is running')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })














// const express = require('express');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// // MongoDB connection
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a35pwem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// // Middleware
// app.use(cors());
// app.use(express.json());

// async function run() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB Atlas");

//     const db = client.db("HallManagement");
//     const seatsCollection = db.collection("Seats");

//     // 🔹 1. Get List of Floors (1 to 5)
//     app.get('/floors', (req, res) => {
//       const floors = Array.from({ length: 5 }, (_, i) => ({ floorNumber: i + 1 }));
//       res.send(floors);
//     });

//     // 🔹 2. Get List of Rooms in a Floor (1 to 20)
//     app.get('/rooms/:floorNumber', (req, res) => {
//       const { floorNumber } = req.params;
//       const rooms = Array.from({ length: 20 }, (_, i) => ({
//         floorNumber: parseInt(floorNumber),
//         roomNumber: i + 1
//       }));
//       res.send(rooms);
//     });

//     // 🔹 3. Get Students in a Room (Seats A, B, C, D)
//     app.get('/room/:roomNumber', async (req, res) => {
//       const { roomNumber } = req.params;
//       const students = await seatsCollection.find({ roomNumber: parseInt(roomNumber) }).toArray();
//       res.send(students);
//     });

//     // 🔹 4. Get List of Empty Seats
//     app.get('/empty-seats', async (req, res) => {
//       const emptySeats = await seatsCollection.find({ isBooked: false }).toArray();
//       res.send(emptySeats);
//     });

//     // 🔹 5. Update Seat (Book a Seat for a Student)
//     app.put('/update-seat/:seatId', async (req, res) => {
//       const { seatId } = req.params;
//       const studentData = req.body;

//       const updateResult = await seatsCollection.updateOne(
//         { _id: new ObjectId(seatId) },
//         { $set: { ...studentData, isBooked: true } }
//       );

//       res.send(updateResult);
//     });

//   } finally {
//     // Optional: Keep MongoDB connection open
//   }
// }

// run().catch(console.dir);

// // Default Route
// app.get('/', (req, res) => {
//   res.send('Hall Management Server is Running');
// });

// // Start Server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });






const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a35pwem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("HallManagement");
    const studentsCollection = db.collection("Seats");
    const expiredCollection = db.collection("expiredStudents");

    // --- API Routes ---
    app.get('/seats', async (req, res) => {
      try {
        const seats = await studentsCollection.find().toArray();
        res.json(seats);
      } catch (error) {
        res.status(500).json({ message: "Failed to retrieve data", error });
      }
    });

    // Get rooms by floor
    app.get('/floor/:floorNumber', async (req, res) => {
      const floor = parseInt(req.params.floorNumber);
      if (floor < 1 || floor > 5) {
        return res.status(400).json({ message: "Invalid floor number" });
      }
      const rooms = [];
      for (let i = 1; i <= 5; i++) {
        rooms.push({ roomNumber: floor * 100 + i });
      }
      res.json(rooms);
    });

    // Get students in a room
    app.get('/room/:roomNumber', async (req, res) => {
      const roomNumber = parseInt(req.params.roomNumber);
      const students = await studentsCollection.find({ roomNumber }).toArray();
      res.json(students);
    });

    // Get student details by seat
    app.get('/student/:roomNumber/:seat', async (req, res) => {
      const { roomNumber, seat } = req.params;
      const student = await studentsCollection.findOne({ roomNumber: parseInt(roomNumber), seat });
      res.json(student || {});
    });
 
    // Update student details
    app.put('/update/:id', async (req, res) => {
      const { id } = req.params;
      const updatedData = req.body;
      const result = await studentsCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedData }
      );
      res.json(result);
    });

    // Move expired students to another collection
    app.get('/expired-students', async (req, res) => {
      const expiredStudents = await expiredCollection.find().toArray();
      res.json(expiredStudents);
    });

    // Mark student as expired (move to another collection)
    app.delete('/expire/:id', async (req, res) => {
      const { id } = req.params;
      const student = await studentsCollection.findOne({ _id: new ObjectId(id) });
      if (student) {
        await expiredCollection.insertOne(student);
        await studentsCollection.deleteOne({ _id: new ObjectId(id) });
        res.json({ message: "Student moved to expired list" });
      } else {
        res.status(404).json({ message: "Student not found" });
      }
    });

    // Start Server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (error) {
    console.error(error);
  }
}

run().catch(console.dir);





