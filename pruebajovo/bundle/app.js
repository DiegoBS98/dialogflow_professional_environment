'use strict';

// =================================================================================
// APP INITIALIZATION
// =================================================================================

const {App} = require('jovo-framework');
const {Alexa} = require('jovo-platform-alexa');
const {GoogleAssistant} = require('jovo-platform-googleassistant');
const {JovoDebugger} = require('jovo-plugin-debugger');

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger()
);


// =================================================================================
// APP LOGIC
// =================================================================================

app.setHandler({

    LAUNCH() {
        let speech = 'Do you either go through the blue door, or through the red door?';
        let reprompt = 'You have two options, the blue door, or the red door.';
        this.ask(speech, reprompt);
    },

    BlueDoorIntent() {
        let speech = 'You chose to go through the blue door.';
        this.tell(speech);
    },

    RedDoorIntent() {
        let speech = 'You chose to go through the red door.';
        this.tell(speech);
    },
    AnadirIntent() {
        let speech = 'Esta es la buena';
        this.ask(speech);
    }
});

module.exports.app = app;
