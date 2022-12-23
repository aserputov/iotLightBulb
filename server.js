const express = require("express")
const bodyParser = require("body-parser")
const { exec } = require('child_process');

const app = express();
const port = 7077;

app.use(bodyParser.json())

app.get("/api", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/api", (req, res) => {
    console.log("POST request received" + JSON.stringify(req.body))
    let ans = JSON.parse(JSON.stringify(req.body));
    console.log(ans.status);
    res.json({ message: "Light Swithced" })

    if (ans.status) {
        let on = exec("sh on.sh", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
        // console.log(on); 
    } else {
        console.log("OFF");
        let off = exec("sh off.sh", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
        // console.log(off);   
    }
})

app.listen(port, () => {
    console.log("Server running on port " + port)
})