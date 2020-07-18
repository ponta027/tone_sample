# tone_sample

## midi.js

tonejs/Midiを用いたMIDI出力サンプル

## JSON入力

JSONからmidi-fileの入力フォーマットに変換して、書き出し関数を実行する。
schemaはリンク参照。

https://github.com/Tonejs/Midi#format


## JSONサンプル

* json/test.json
     * GeneralUser_GS_v1.471.sf2 のテスト用MIDI（ボイス再生）を再現しようとしたもの。
     * ProgramNumber指定時にControlChangeがtonejsMidiでは未サポートなので、独自に修正したtonejs/Midiを使った。
     
* json/multi_percussion.json(TBD)
     * 上記サンプルのボイス再生とともにdrumが再生されるようにしようと設定しているところ。
     * 今の所わからないため、調査中。





