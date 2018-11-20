'use strict';

export default class Help {
    handle(message, bot) {
        return bot.sendMessage(message.from, '/reg Address_DateOfPhotoSet_NumberOfPhone - to submit request (e.g. /reg NewYork 11.11.2018 0996362580');
    }
}