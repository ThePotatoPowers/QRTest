const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.get("/", function(req, res)  {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(5000, () => {
    console.log('Server is running at port 5000');
});