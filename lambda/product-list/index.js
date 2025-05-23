const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { ScanCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient();

exports.handler = async (event) => {
  try {
    const command = new ScanCommand({
      TableName: "Products"
    });

    const data = await client.send(command);

    return {
      statusCode: 200,
      body: JSON.stringify(data.Items),
    };
  } catch (err) {
    console.error("Error getting products:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error getting products" }),
    };
  }
};
