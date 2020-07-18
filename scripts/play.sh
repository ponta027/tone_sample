#!/bin/bash

SOUND_FONT=/Users/kazuhiro/sf/GeneralUser_GS_1.471/GeneralUser_GS_v1.471.sf2
#fluidsynth -i ${SOUND_FONT}  $1 
#fluidsynth -i ${SOUND_FONT}  $1 -v
fluidsynth -K 32 -i ${SOUND_FONT}  $1 -v


