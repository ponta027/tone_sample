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


const json = JSON.parse(fs.readFileSync('./json/sample.json', 'utf8'));
//const json = JSON.parse(readFileSync(resolve(__dirname, "./midi/sample.json")).toString());
const midi2 = new Midi();
midi2.fromJSON(json);
fs.writeFileSync( "output_fromjson.midi" , new Buffer( midi2.toArray()))
