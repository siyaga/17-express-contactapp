const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const {loadContact, findContact} =require('./utils/contacts')
const app = express()
const port = 3000


// Built-in Middleware
app.use(express.static('public'));
// gunakan ejs
app.set('view engine', 'ejs');
// Third-party Middleware
app.use(expressLayouts);

app.get('/', (req, res) => {
  const mahasiswa = [
    {
      nama: 'Adi Riyanto',
      email: 'siyaga@gmail.com',
    },
    {
      nama: 'Sulaiman',
      email: 'Sulaiman@gmail.com',
    },
    {
      nama: 'Asep',
      email: 'Asep@gmail.com',
    },
  ]

  res.render('index', {
    layout: 'layouts/main-layout',
    nama: 'Adi Riyanto', 
    title: 'Halaman Home',
    mahasiswa
  });

  });
app.get('/about', (req, res) => {
    res.render('about', {
      layout: 'layouts/main-layout',
      title: 'Halaman About'});
  });
  app.get('/contact', (req, res) => {
    const contacts = loadContact();
    res.render('contact', {
      layout: 'layouts/main-layout',
      title: 'Halaman Contact',
      contacts,
    });
  });

  app.get('/contact/:nama', (req, res) => {
   const contact = findContact(req.params.nama);
    res.render('detail', {
      layout: 'layouts/main-layout',
      title: 'Halaman Detail Contact',
     contact,
    });
  });
app.use('/', (req, res)=> {
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

