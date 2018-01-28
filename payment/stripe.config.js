'use strict';

const keys = require('./keys.config');
const stripe = require("stripe")(keys.private);


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

let stripeConfig = new StripePayment(stripe,keys.public, keys.private);

module.exports = stripeConfig;