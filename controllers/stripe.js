const stripe = require("stripe")(
  "sk_test_51LLRSqSAnHbo4JMTucK0Lc00c5Ncixy3OhH5pv2xZfCFGertTm5rAPFYvUa64116TKqSWvKDv6fNrG2noA4zHCey00k3oF47Nl"
);

const payment = async (req, res) => {
  await stripe.paymentIntents
    .create({
      amount: req.body.amount,
      currency: "usd",
      payment_method_types: ["card"],
    })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      res.json(e);
    });
};

module.exports = { payment };
