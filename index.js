require('dotenv').config();
var voice = require('alexa-sdk');
var langStrings = require('./langStrings.js');

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

    'WelcomeIntent': function() {
        var speech = this.t("WELCOME_MESSAGE")
        this.emit(':tellWithCard', speech, this.t("SKILL NAME"))
    },
    'AMAZON.StopIntent': function() {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.HelpIntent': function() {
        var initSpeech = this.t("HELP_MESSAGE");
        var askAgain = this.t("HELP_PROMPT");
        this.emit(':ask', initSpeech, askAgain);
    },
    'AMAZON.CancelIntent': function() {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'SayHelloIntent': function() {
        this.emit(':tell', this.t("HELLO_MESSAGE"));
    },
    'MakeCupOfTeaIntent': function() {
        this.emit(':ask', this.t("TEA_MESSAGE"), this.t("TEA_QUESTION"));
    },
    'BoilKettleIntent': function() {
        this.emit(':ask', this.t("BOIL_KETTLE"), this.t("TEA_QUESTION"));
    },
    'RepeatTeaQuestion': function() {
        this.emit(':ask', this.t("TEA_QUESTION"));
    },
    'AddIngredientsIntent': function() {
        this.emit(':ask', this.t("ADD_INGREDIENTS"), this.t("TEA_QUESTION"));
    },
    'AddWaterIntent': function() {
        this.emit(':ask', this.t("ADD_WATER"), this.t("TEA_QUESTION"));
    },
    'AddMilkIntent': function() {
        this.emit(':ask', this.t("ADD_MILK"), this.t("TEA_QUESTION"));
    },
    'FinishBrewIntent': function() {
        this.emit(':tell', this.t("FINISH_BREW"));
    }

}

