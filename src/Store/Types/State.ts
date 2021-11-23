import type { ChordName } from '../../Theory/chords';
import type { KeyName } from '../../Theory/keys';

export interface StateVersion0 {
  selectedChords: ChordName[];
}

export interface StateVersion1 {
  version: 1;
  selectedChords: ChordName[];
}

export interface ChordSet {
  name: string;
  description: string;
  selectedKey?: KeyName;
  selectedChords: ChordName[];
}

export interface StateVersion2 {
  version: 2;
  chordSets: ChordSet[];
}

export type State = StateVersion2;
