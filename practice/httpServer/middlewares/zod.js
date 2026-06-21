const express = require('express');
const app = express();
const port = 3000;
const zod = require('zod');

app.use(express.json());

const schema = zod.array(zod.number());

app.post("/health-checkUp", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if (!response.success){
    res.status(404).json({msg : "input is invalid"});
    return;
  }
  res.send(response);
});

app.listen(port);