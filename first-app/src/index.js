import express from "express";
import {dirname, join} from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";


const app = express();

// get path
const __dirname = dirname(fileURLToPath(import.meta.url))

// set ejs view engine
app.set('view engine', 'ejs')
// set views folder
app.set('views', join(__dirname, 'views'))

// set index routes and styles
app.use(indexRoutes)
app.use(express.static(join(__dirname, 'public')))


app.listen(3000)
console.log("Server is listening on port", 3000)