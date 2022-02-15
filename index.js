const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = "mongodb+srv://jadew33:jade@vanthemanguestbook.5wlis.mongodb.net/guestbook?retryWrites=true&w=majority";
const routes = require('./routes/routes')


mongoose.connect(process.env.MONGODB_URI || MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('connected to mongodb');
})

app.use(express.json());

// app.use(express.static(path.join(__dirname, 'client/build')))

app.use('/api', routes);


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})