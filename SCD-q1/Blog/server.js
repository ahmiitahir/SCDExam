const express = require('express'); 
const mongoose = require('mongoose'); 
const dotenv = require('dotenv'); 
const cors = require('cors'); 
dotenv.config(); 
const app = express(); 
app.use(express.json()); 
app.use(cors()); 
// Import routes
 const blogRoutes = require('./routes/blogs');
app.use('/api/blogs', blogRoutes); 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: 
true }) 
.then(() => console.log('MongoDB connected to Blog Service')) 
.catch(err => console.error(err)); 
app.listen(process.env.PORT, () => console.log(`Blog Service running on port 
${process.env.PORT}`));