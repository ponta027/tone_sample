#!/bin/bash

echo `pwd`
node midi.js $1
./scripts/play.sh $1.mid

