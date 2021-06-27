import {Countdown} from "./countdown.js";
import {Messages} from "./messages.js";
import {Gallary} from "./gallary.js";

document.body.innerHTML = "<h1>Sarah and Josh Gallery</h1>\n" +
    "\n" +
    Countdown.getHTML() +
    "\n" +
    Messages.getHTML() +
    "\n" +
    Gallary.getHTML();

Countdown.start();
Messages.setup();
Gallary.create();