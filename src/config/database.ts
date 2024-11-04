import { DynamoDB } from 'aws-sdk';

export const dynamo = new DynamoDB.DocumentClient({
  convertEmptyValues: true,
  paramValidation: true,
  region: 'us-west-2',
});
