const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');
//const bbRoute= require("./routes/bouding_box");
const routes = require("./routes/routes"); 


const app = express()


app.use(express.json())
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(cors({ origin: true }));
//app.use('/bouding_box', bbRoute)
app.use('/routes', routes);

const PORT = process.env.PORT ||3001

app.listen(PORT, console.log(`Server started on port ${PORT}`));
