const app = require('express')();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");

dotEnv.config();

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    )
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
    console.log("Connected to the server");
});

app.get("/", (req, res) => {
    res.send('Server is up');
});

const routes = require('./routes/routes');

app.use("/routes", routes);