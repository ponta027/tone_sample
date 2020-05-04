import { Midi } from '@tonejs/midi'
import * as fs from 'fs';

const filename = process.argv[2];
console.log(filename);
const json = JSON.parse(fs.readFileSync(filename, 'utf8'));
const midi2 = new Midi();
midi2.fromJSON(json);
fs.writeFileSync( filename +".mid" , Buffer.from( midi2.toArray()))


function createMidiRaw():void{
        var midi = new Midi()
        const track  = midi.addTrack()
        track.addNote({
            midi : 60,
            time : 0    ,
            duration : 0.2
        })

        fs.writeFileSync( "output.midi" , Buffer.from( midi.toArray()))
}

createMidiRaw();


