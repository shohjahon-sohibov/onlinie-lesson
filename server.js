require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")

const lessonRoutes = require("./routes/lessonRoutes")

app.use(express.json())
app.use(cors());


app.use('/api/online-lesson/', lessonRoutes);


const { PORT } = require("./config")

app.listen(PORT || process.env.PORT, console.log(`working stable in port: ${PORT}`))
