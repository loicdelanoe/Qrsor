import {Qrsor} from "./js/Qrsor.js";

class Main {
    constructor() {
        new Qrsor(
            ['.link', '.test'],
            0.3
        );
    }
}

new Main();