const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose')
const cookieParser = require('cookie-parser')
const app = express();

// database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database dy run'))
.catch(() => console.log('Database no dy run', err))

// middleware
const corsOptions = {
   origin: 'http://localhost:3000',
   credentials: true,
};
  
app.use(cors(corsOptions)) 
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/authRoutes'));

const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));