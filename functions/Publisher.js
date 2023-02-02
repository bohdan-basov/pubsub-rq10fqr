const AWS = require("aws-sdk");

const TOPIC_ARN = process.env.TOPIC_TOPIC01;

module.exports.handler = async (event, context) => {
  const sns = new AWS.SNS();

  await sns.publish({ Message: event.body, TopicArn: TOPIC_ARN }).promise();

  return {
    statusCode: 201,
  };
};
