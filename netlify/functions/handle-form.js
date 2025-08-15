const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    // Parse the form data
    const params = new URLSearchParams(event.body);
    const formData = {};
    for (const [key, value] of params.entries()) {
      formData[key] = value;
    }

    // Log the form data (for debugging)
    console.log('Form submission received:', formData);

    // Send a success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' }),
    };
  } catch (error) {
    console.error('Error processing form submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to process form submission',
        details: error.message 
      }),
    };
  }
};
