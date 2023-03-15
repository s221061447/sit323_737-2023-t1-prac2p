import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(__dirname + '/public'));

const port = 3000;

app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});