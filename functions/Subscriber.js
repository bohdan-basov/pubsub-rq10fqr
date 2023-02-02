const crypto = require("crypto");
const AWS = require("aws-sdk");

const TableName = process.env.TABLE_TABLE01;

module.exports.handler = async ({ Records }, context) => {
  var documentClient = new AWS.DynamoDB.DocumentClient();

  await documentClient
    .batchWrite({
      RequestItems: {
        [TableName]: Records.map((record) => {
          return {
            PutRequest: {
              Item: { pk: crypto.randomUUID(), event: record },
            },
          };
        }),
      },
    })
    .promise();
};
