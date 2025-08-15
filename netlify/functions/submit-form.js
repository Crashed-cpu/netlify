// Netlify Function to handle form submissions
// This function works with the built-in Netlify Forms functionality
// while adding additional processing and validation

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ 
        success: false,
        error: 'Method Not Allowed',
        message: 'Only POST requests are accepted'
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    };
  }

  try {
    // Parse the form data from URL-encoded format
    const params = new URLSearchParams(event.body);
    const formData = {};
    
    // Convert form data to object
    for (const [key, value] of params.entries()) {
      formData[key] = value;
    }

    // Required fields validation
    const requiredFields = ['name', 'email', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          success: false,
          error: 'Validation Error',
          message: `Missing required fields: ${missingFields.join(', ')}`
        }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          success: false,
          error: 'Validation Error',
          message: 'Please provide a valid email address'
        }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      };
    }

    // Log the form submission (for monitoring and debugging)
    console.log('Form submission received:', {
      name: formData.name,
      email: formData.email,
      intent: formData.intent || 'Not specified',
      timestamp: new Date().toISOString()
    });

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false,
        error: 'Server Error',
        message: 'An unexpected error occurred while processing your submission. Please try again later.'
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
  }
};
