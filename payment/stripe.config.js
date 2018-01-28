'use strict';


const publicKey = 'pk_test_9bxDnvMC2ibAP712AUoJIzR2';
const secretKey = 'sk_test_Uh8zWsJzX1jVs1JjcNCE71Ay';


const stripe = require("stripe")(secretKey);


class StripePayment {
    constructor(keyPublic, keySecret) {
        this.module_stripe = stripe;
        this.keyPublishable = keyPublic;
        this.keySecret = keySecret;
    }

    getPublicKey() {
        return this.keyPublishable;
    }

    getKeySecret() {
        return this.keySecret;
    }

    getModuleStripe() {
        return this.module_stripe;
    }
}

let stripeConfig = new StripePayment(stripe,publicKey, secretKey);

module.exports = stripeConfig;