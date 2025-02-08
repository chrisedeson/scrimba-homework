const fetch = require('node-fetch'); // Use node-fetch in serverless functions

exports.handler = async function(event, context) {
  const apiKey = process.env.OMDB_API_KEY; // Fetch the API key from environment variables
  const searchQuery = event.queryStringParameters.query; // Get the search query from URL
  const url = `https://www.omdbapi.com/?&apikey=${apiKey}&s=${searchQuery}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data from OMDB' }),
    };
  }
};