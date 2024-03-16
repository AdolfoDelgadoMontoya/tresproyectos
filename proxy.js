const express = require('express');
const axios = require('axios');
//Error:    const request = require('request');

const app = express();
const port = 3000;
//Inecesario:    const API_URL = 'http://localhost:3000';

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});

/*--------------------------get-----------------------*/
//Conversion de moneda
app.get('/conversion/:enter/:exit', async (req, res) => {
    const enter = req.params.enter;
    const exit = req.params.exit;
    const llave = '';
    const api = `https://api.freecurrencyapi.com/v1/latest?apikey=${llave}&currencies=${enter},${exit}`;
    try {
      const respuesta = await axios.get(api);
      res.json(respuesta.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error en el servidor proxy');
    }
});
//Pronostico del clima
app.get('/paises', async (req, res) => {
    // API para obtener Json de ISO 3166 y nombre de paises
    const api = 'https://restcountries.com/v3.1/all?fields=name,cca2';
    try {
      const respuesta = await axios.get(api);
      res.json(respuesta.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error en el servidor proxy');
    }
});
  
app.get('/clima/:ciudad/:pais', async (req, res) => {
    const ciudad = req.params.ciudad;
    const pais = req.params.pais;
    const llave = '';
    const idioma = 'es';
    const unidadC = 'metric';
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${llave}&units=${unidadC}&lang=${idioma}`;
    try {
      const respuesta = await axios.get(api);
      res.json(respuesta.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error en el servidor proxy');
    }
});