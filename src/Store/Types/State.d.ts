export interface StateVersion0 {
  selectedChords: ChordName[];
}

export interface StateVersion1 {
  version: 1;
  selectedChords: ChordName[];
}

export type State = StateVersion1;
