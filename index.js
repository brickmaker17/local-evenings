const express = require('express');
const app = express();
const gridStream = require('gridfs-stream');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const listRouter = require('./routes/router')

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)))

mongoose.connect('mongodb://localhost:27017/locations', (err) => {
    if (err) throw err;
    console.log('connected to database')
})

exports.init = function(app, db) {
    var grid = gridStream(db, mongoose.mongo);

    app.post("/UploadFile", function(request, response) {
        var file = request.files.UploadedFile;

        var meta = request.param("Meta");
        var name = request.param("Name");

        var stream = grid.createWriteStream({
            filename: name,
            metadata: meta
        });

        fs.createReadStream(file.path)
        .on("end", function() {
            response.send({ Success: true });
        })
        .on("Error", function(error) {
            HandleError(error, response);
        })
        .pipe(stream);
    });

    app.get("/DownloadFile", function(request, response) {
        var selector = request.param("Selector");
        response.writeHead(200, { "Content-Type" : "image/png"});
        grid.createReadStream({ filename: "FileUploadNamed" }).pipe(response);
    });
}
// const gridfs = require('mongoose-gridfs')({
//     collection: 'attachments',
//     model: 'Attachments',
//     mongooseConnection: mongoose.connection
// });

// Attachment = gridfs.model;

// Attachment.write({
//     filename: 'FileUploadNamed',
//     Content-Type: 'image/png'
//     },
//     fs.createReadStream('./upload'),
//     function(err, createdFile){
        
// });

app.use('/locations', listRouter);

app.get("*", (req, res) => {
    return res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(9090, () => {
    console.log('Connected to 9090');
});

