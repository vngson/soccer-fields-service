const swaggerJSDoc = require('swagger-jsdoc');

// Cấu hình Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API Documentation for My Project',
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL của server
      },
    ],
  },
  apis: ['./routes/*.js'], // Vị trí chứa định nghĩa API
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
