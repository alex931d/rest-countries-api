const express = require("express");
const app = express();
const host = '0.0.0.0';
const fs = require('fs');

const axios = require('axios');
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const path = require("path");
const dataFilePath = path.join(__dirname, 'client', 'data.json');
app.use(express.json());
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.set("views",path.join(__dirname, "./client/views"));
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});


// Function to save data to a JSON file
function saveDataToFile(data) {
      fs.writeFile(dataFilePath, JSON.stringify(data), (err) => {
    if (err) {
      console.error('Error saving data to file:', err);
    }
  });
}

// Function to load data from a JSON file
function loadDataFromFile() {
  try {
    const data = JSON.parse(fs.readFileSync(dataFilePath));
       return data;
  } catch (err) {
    console.error('Error loading data from file:', err);
    return null;
  }
}


app.get('/', (req, res) => {

    axios.get('https://restcountries.com/v2/all')
      .then(response => {
        const countries = response.data;
        saveDataToFile(countries);
        res.render('index', {countries});
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error fetching countries');
      });
});

app.post('/country', (req, res) => {
  const name = req.body.country;
    axios.get(`https://restcountries.com/v3.1/name/${name}`)
      .then(response => {
        const countries = response.data;
        saveDataToFile(countries);
        res.render('index', {countries});
      })
      .catch(error => {
        res.redirect('/');
      });
});

app.post('/country/filter', (req, res) => {
  const region = req.body.region;
  const cachedData = loadDataFromFile();
  if (cachedData) {
    const matchingCountries = cachedData.filter(country => country.region === region);

    res.render('index', { countries: matchingCountries });
  }
  else{
    res.status(500).send('Error fetching countries');
  }
});

app.get('/page/:name', (req, res) => {
  const name = req.params.name;

    axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then(response => {
        const countries = response.data;
        saveDataToFile(countries);
        res.render('country', {countries});
      })
      .catch(error => {
        res.redirect('/');
      });
});
app.listen(port,host,function() {
  console.log("server started")
})
