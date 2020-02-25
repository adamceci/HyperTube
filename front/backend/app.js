const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
  next();
});

app.use('/api/users', (req, res, next) => {
  const users = [
    {
      id: 1,
      name: 'Ngo',
      email: 'ngolo@test.com',
      photoUrl: 'https://cdn.radiofrance.fr/s3/cruiser-production/2018/09/a92740ea-c628-11e8-a11d-42010ae60007/801x410_sitesdefaultfiles20180905347328gettyimages-842335094.jpg',
      firstName: 'Ngolo',
      lastName: 'Kante'
    },
    {
      id: 1,
      name: 'Kova',
      email: 'mat@test.com',
      photoUrl: 'https://i2-prod.football.london/incoming/article17329533.ece/ALTERNATES/s615/0_Mateo-Kovacic.jpg',
      firstName: 'Mateo',
      lastName: 'Kovacic'
    },
    {
      id: 1,
      name: 'Jorgi',
      email: 'jorge@test.com',
      photoUrl: 'https://medias.lequipe.fr/img-photo-jpg/soccer-football-premier-league-arsenal-v-chelsea-emirates-stadium-london-britain-december/1500000001280762/96:0%2C1949:1234-1000-666-70/31902.jpg',
      firstName: 'Jorginho',
      lastName: 'Jorginho'
    }
  ];
  res.status(200).json({
    message: 'Users fetched succesfully',
    users: users
  });
});

module.exports = app;
