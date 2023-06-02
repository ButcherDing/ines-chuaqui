const PRICES = {
  SKL000s3x5: 10,
  SKL000s8x11: 20,
  SKL000s16x20: 40,
  SKL001s3x5: 10,
  SKL001s8x11: 20,
  SKL001s16x20: 40,
  SKL002s3x5: 10,
  SKL002s8x11: 20,
  SKL002s16x20: 40,
  SKL003s3x5: 10,
  SKL003s8x11: 20,
  SKL003s16x20: 40,
  SKL004s3x5: 10,
  SKL004s8x11: 20,
  SKL004s16x20: 40,
  FRS000s3x5: 10,
  FRS000s8x11: 20,
  FRS000s16x20: 40,
  FRS001s3x5: 10,
  FRS001s8x11: 20,
  FRS001s16x20: 40,
  FRS002s3x5: 10,
  FRS002s8x11: 20,
  FRS002s16x20: 40,
  FRS003s3x5: 10,
  FRS003s8x11: 20,
  FRS003s16x20: 40,
  FRS004s3x5: 10,
  FRS004s8x11: 20,
  FRS004s16x20: 40,
  FRS005s3x5: 10,
  FRS005s8x11: 20,
  FRS005s16x20: 40,
  FRS006s3x5: 10,
  FRS006s8x11: 20,
  FRS006s16x20: 40,
  FRS007s3x5: 10,
  FRS007s8x11: 20,
  FRS007s16x20: 40,
  IND000s3x5: 10,
  IND000s8x11: 20,
  IND000s16x20: 40,
  IND001s3x5: 10,
  IND001s8x11: 20,
  IND001s16x20: 40,
};

exports.handler = async (event) => {
  try {
    const { cartItems } = JSON.parse(event.body);

    const total = cartItems.reduce(
      (acc, cartItem) => (acc += PRICES[cartItem.cartId] * cartItem.quantity),
      0
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ total }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
