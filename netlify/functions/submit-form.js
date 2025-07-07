const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Here you would typically save the form data to a database or service
    // For example, using Google Sheets API, Airtable, or SendGrid
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Form submitted successfully',
        data 
      }),
    };
  } catch (error) {
    console.error('Error processing form:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to process form submission',
        details: error.message 
      }),
    };
  }
};
