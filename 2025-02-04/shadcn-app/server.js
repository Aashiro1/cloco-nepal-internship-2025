
import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3001;

// Endpoint to serve data from db.json
app.get('/data', (_, res) => {
  const dbPath = path.join(__dirname, 'db.json');
  
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the database file');
      return;
    }
    res.json(JSON.parse(data)); // Send the content of db.json as a response
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
