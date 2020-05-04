"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var midi_1 = require("@tonejs/midi");
var fs = __importStar(require("fs"));
var filename = process.argv[2];
console.log(filename);
var json = JSON.parse(fs.readFileSync(filename, 'utf8'));
var midi2 = new midi_1.Midi();
midi2.fromJSON(json);
fs.writeFileSync(filename + ".mid", Buffer.from(midi2.toArray()));
function createMidiRaw() {
    var midi = new midi_1.Midi();
    var track = midi.addTrack();
    track.addNote({
        midi: 60,
        time: 0,
        duration: 0.2
    });
    fs.writeFileSync("output.midi", Buffer.from(midi.toArray()));
}
createMidiRaw();
//# sourceMappingURL=ex.js.map