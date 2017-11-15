require('dotenv').config();
var voice = require('alexa-sdk');
var langStrings = require('./languageStrings.js');

exports.handler = function(event, context) {
    var alexa = voice.handler(event, context);
    alexa.resources = langStrings;
    alexa.registerHandlers(handler_events);
    alexa.execute();
}

var handler_events = {

    'LaunchRequest': function() {
        this.emit();
    },

    'AMAZON.StopIntent': function() {
        this.emit(':tell', this.t("STOP MESSAGE"));
    }

}

