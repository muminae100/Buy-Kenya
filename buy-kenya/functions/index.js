const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51K9wHWEPTiQ984IpDPhsrSVWG3AahBKT2n5Vg4tX2JWrd7WatHjklIN1g3L5FoydEM3YDmds51pzrQJ3v97u9TaA00bSEXG0Sr')

//API

//App config
const app = express();

//Middleware
app.use(cors({origin: true}))
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send
('hello world!'))

app.post("/payment/create", async (request, response) => {
    const total = request.query.total;
    console.log('Payment received!', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
});

//Listen command
exports.api = functions.https.onRequest(app)

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//http://localhost:5001/buy-kenya/us-central1/api