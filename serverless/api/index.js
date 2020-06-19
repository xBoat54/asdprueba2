const express = require('express');
const app = express();


app.get('*', (req, res) => {
	console.log("HOLA VIEJAAAAAAAAAAAAA!")
	res.send({ message: 'TUVIEJA'})
})


module.exports = app;