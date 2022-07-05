const express = require("express");
const app = express()
const routes = require("./routes/routes")
const cors = require("cors");

app.use(cors())
app.use(express.json())
app.use(routes)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`StudentJourneyAPI running on port ${PORT}`)
})