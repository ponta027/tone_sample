const {Midi } = require('@tonejs/midi')
const fs  = require('fs')

var midi = new Midi()
const track  = midi.addTrack()
track.addNote({
    midi : 60,
    time : 0    ,
    duration : 0.2
})


fs.writeFileSync( "output.midi" , new Buffer( midi.toArray()))
