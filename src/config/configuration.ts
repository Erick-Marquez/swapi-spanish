export default () => ({
  swapi: process.env.SWAPI_URL || 'https://swapi.dev/api/',
  table: process.env.MODULE_TABLE || 'People',
  region: process.env.DYNAMODB_REGION || 'us-west-2',
});
  