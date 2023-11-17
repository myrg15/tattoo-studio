import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import { router as employeesRouter } from './routes/employeesRouter';
import { router as usersRouter } from "./routes/usersRouter";
import { appointmentsRouter } from "./routes/appointmentsRouter";

import { AppDataSource } from './database';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use('/users', usersRouter);
app.use('/artist', employeesRouter);
app.use('/appointment', appointmentsRouter);
//app.use('/desingallery', desingalleryRouter);

app.get('/', (req, res) => {
  res.send('Home PageX');
});


AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {console.log(`Server running ${PORT}`);})
  })
  .catch(error => {
    console.log(error)
  })