This is a messenger project

LINKS:
figma: https://www.figma.com/file/MQRWhB3JZe3ZwCqxbtQP3Y/practicum?t=7fY0UacI2URqbbNP-1
netlify: https://effervescent-kulfi-d44cc4.netlify.app

COMMANDS:
Start project: npm run start,
Start project on localhost:3000: node ./server/server.js
Start dev with hotReloading: npm run start
Run all tests: npm run test

Docker environment:
docker images
copy imageId
docker -d -p 8081:3000 imageId
docker build
docker run -p 3000:3000 -d imageId
go to localhost:3000

STACK:
Main: JavaScript, TypeScript, SCSS, Handlebars
Linters: eslint-config-airbnb, typescript
Building: Webpack
Chat: WebSocket
Tests: Mocha, Chai

IMPORTANT
if you need to commit - don't forget to delete a dist folder for passing linters
