import { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  try {
    console.log(event.body);
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }

  const { name = "stranger" } = event.queryStringParameters;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  };
};
