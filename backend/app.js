const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const adhesionRoutes = require('./routes/adhesion');
const mediaRoutes = require('./routes/media');
const planningRoutes = require('./routes/planning');
const actualiteRoutes = require('./routes/actualite');
const partenaireRoutes = require('./routes/partenaire');
const executifRoutes = require('./routes/executif');

mongoose.connect(process.env.MONGO_URL,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion a MongoDB reussie !'))
  .catch(() => console.log('Connexion a MongoDB echouee !'));
 
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//   pour eliminer le prog de GROS (envoyer des req externe de node)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With , X-PINGOTHER, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.urlencoded({limit: '50mb', extended: true})); 
app.use(express.json({ limit: '50mb'}));

app.use(`${process.env.API_REST}auth`       ,userRoutes);
app.use(`${process.env.API_REST}adhesion`  ,adhesionRoutes);
app.use(`${process.env.API_REST}planning`   ,planningRoutes);
app.use(`${process.env.API_REST}actualite`  ,actualiteRoutes);
app.use(`${process.env.API_REST}partenaire` ,partenaireRoutes);
app.use(`${process.env.API_REST}media`      ,mediaRoutes);
app.use(`${process.env.API_REST}executif`  ,executifRoutes);

module.exports = app;