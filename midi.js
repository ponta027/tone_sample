const {Midi } = require('@tonejs/midi')
const fs  = require('fs')
const readFileSync = require('fs')
//import { readFileSync, writeFileSync } from "fs";

var midi = new Midi()
const track  = midi.addTrack()
track.addNote({
    midi : 60,
    time : 0    ,
    duration : 0.2
})

fs.writeFileSync( "output.midi" , new Buffer( midi.toArray()))


const filename = process.argv[2];
console.log(filename);
const json = JSON.parse(fs.readFileSync(filename, 'utf8'));
//const json = JSON.parse(readFileSync(resolve(__dirname, "./midi/sample.json")).toString());
const midi2 = new Midi();
midi2.fromJSON(json);
fs.writeFileSync( filename +".mid" , new Buffer( midi2.toArray()))
