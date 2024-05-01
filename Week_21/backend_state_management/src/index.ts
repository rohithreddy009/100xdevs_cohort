import { startLogger } from "./logger";
import { games } from "./store";

startLogger();

setInterval(() => {
    games.push({
        "whitePlayer": "harkirat",
        "blackPlayer": "jaskirat",
        moves: []
    })
}, 5000)