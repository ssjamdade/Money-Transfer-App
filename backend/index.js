const express = require("express");
const cors = require("cors");
const rooter = require("./routes/index");

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v1', rooter)

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the bank API"
    })
})

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000/");
});
