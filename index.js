const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    const visitor = request.query.visitor || 'Anonymous';
    const responseBody = {
        message: `Hey ${visitor} ! Welcome to Express Boilerplate.`,
    }
    response.status(200).json(responseBody);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running and listening on port ${port}`);
});