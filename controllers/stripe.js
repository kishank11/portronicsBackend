const stripe = require("stripe")(
  "sk_test_51LLRSqSAnHbo4JMTucK0Lc00c5Ncixy3OhH5pv2xZfCFGertTm5rAPFYvUa64116TKqSWvKDv6fNrG2noA4zHCey00k3oF47Nl"
);

const createSource = async (req, res) => {
  // const source = stripe.sources.create(
  //   {
  //     currency: "USD",
  //     owner: {
  //       email: "kishanlal@siti-solutions.com",
  //     },
  //   },
  //   function (err, source) {
  //     if (err) {
  //       console.log(err);
  //       res.json(err);
  //     }
  //     // asynchronously called
  //     console.log(source);
  //     res.json(source);
  //   }
  // );
  const paymentIntent = await stripe.paymentIntents
    .create({
      amount: req.body.amount,
      currency: "usd",
      payment_method_types: ["card"],
    })
    .then((data) => {
      res.json(data);
    });
};
const payment = async (req, res) => {
  stripe.charges.create(
    {
      source: "default_source",
      amount: req.body.amount,
      currency: "USD",
      payment_method: "pm_card_visa",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
};

module.exports = { payment, createSource };
