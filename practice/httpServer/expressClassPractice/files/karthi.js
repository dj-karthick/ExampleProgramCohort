app.get("/files", function(req, res){

    fs.readdir('./files', (err, files) => {
      if(err){
        console.error("Error reading folder : ", err);
        res.status(404).json({msg : "An error occured in reading the folder"});
      }

      let filesList = [];
      files.forEach(file => {
        const fullPath = path.join('./files', file);
        if(fs.lstatSync(fullPath).isFile()){
          filesList.push(file);
        }
      });
      res.status(200).json(filesList);
    });
});


app.get("/files/:fileName", function(req, res){

  const fileName = req.params.fileName;
  const fullPath = path.join('./files', fileName);
  fs.readFile(fullPath, 'utf8', (err, data) => {

    if(err){

      if(err.code === 'ENOENT'){
        return res.status(404).send(`File not found: ${fileName}`);
      }

      return res.status(500).send("server error occured while reading the file.");
    }

    res.send(data);
  });
  
  app.all('*', (req, res) => {
    res.status(404).send('Route not found');
});


  
});

module.exports = app;