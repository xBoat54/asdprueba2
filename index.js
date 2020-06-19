const express = require('express');
const app = express();

app.get('*', (request, response) => {
	response.send({ message: 'tuvieja'})
})


app.listen(3000, () => console.log('esta andando vieja'))