require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
<<<<<<< Updated upstream
    const { amount } = JSON.parse(event.body);
=======
    const { cartItems } = JSON.parse(event.body);

    const amount = await cartItems.reduce((acc, cartItem) => {
      return (acc += PRICES[cartItem.cartId] * cartItem.quantity * 100);
    }, 0);
>>>>>>> Stashed changes

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "CAD",
      // payment_method_types: ["card"],
      automatic_payment_methods: { enabled: true },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
