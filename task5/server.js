const express = require('express');
const app = express();
const vehicleRoutes = require('./routes/vehicleRoutes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', vehicleRoutes);

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
