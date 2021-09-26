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
  selectedChords: ChordName[];
}

export interface StateVersion2 {
  version: 2;
  chordSets: ChordSet[];
}

export type State = StateVersion2;
