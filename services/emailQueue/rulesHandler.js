var _ = require('lodash');

module.exports = {
    chooseEmail: function(emails){
        console.log("EMAILS: ", emails);
        if(emails){
           var latestMail = _.sortBy(emails, 'saved_at');
           latestMail = _.reverse(latestMail)[0];
           console.log("latestMail: ", latestMail.value);
           return latestMail.value;
        }
    },
    sendRulesAccepted: function(basket, rules){
        //CHECK si un mail a deja été envoyé pour cette session
        var minBasket = 0,
            maxBasket = 10;
        if(rules.min_product_quantity != null)
            minBasket = rules.min_product_quantity;
        if(rules.product_quantity != null)
            maxBasket = rules.product_quantity;
        return true;
        //return basket.products.length > minBasket && basket.products.length <= maxBasket
    }
}
