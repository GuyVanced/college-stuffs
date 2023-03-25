const express = require("express");
const port = 5555;

const app = express();
app.use(express.json());

app.get("/", (req,res) => {
    res.json({data : "Welcome to the home page"});
});
const mainRoutes = require("./app/routes/main.routes");
mainRoutes(app);


app.listen(port, () => {
    console.log('App is running on port', port);
});