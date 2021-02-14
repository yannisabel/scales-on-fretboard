/**
 * Notes
 */
export const notesNames = [
  'A',
  'A#',
  'B',
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#'
]

/**
 * Intervals
 */
export const intervalsNames = [
'Root',
'Minor second',
'Major second',
'Minor third',
'Major third',
'Perfect fourth',
'Diminished fifth',
'Perfect fifth',
'Minor sixth',
'Major sixth',
'Minor seventh',
'Major seventh',
];

export const intervalsShorthands = [
'R',
'm2',
'M2',
'm3',
'M3',
'P4',
'd5',
'P5',
'm6',
'M6',
'm7',
'M7',
];

/**
 * Models (scales & arpeggios)
 */
export const scales = {

// SCALES
'major': {positions: [0, 2, 4, 5, 7, 9, 11], steps: ['whole', 'whole', 'half', 'whole', 'whole', 'whole'], name: 'major'},
'Harmonic minor': {positions: [0, 2, 3, 5, 7, 8, 11], steps: ['whole', 'half', 'whole', 'whole', 'half', 'whole'], name: 'Harmonic minor'},
'Melodic minor': {positions: [0, 2, 3, 5, 7, 9, 11], steps: ['whole', 'half', 'whole', 'whole', 'whole', 'whole'], name: 'Melodic minor'},
'Natural minor': {positions: [0, 2, 3, 5, 7, 8, 10], steps: ['whole', 'half', 'whole', 'whole', 'half', 'whole'],  name: 'Natural minor'},
'Pentatonic Major': {positions: [0, 2, 4, 7, 9], steps: ['whole', 'whole', 'whole and a half', 'whole'],  name: 'Pentatonic Major'},
'Pentatonic Minor': {positions: [0, 3, 5, 7, 10], steps: ['whole and a half', 'whole', 'whole', 'whole and a half'],  name: 'Pentatonic Minor'},
'Pentatonic Blues': {positions: [0, 3, 5, 6, 7, 10], steps: ['whole and a half', 'whole', 'half', 'half', 'whole and a half'], name: 'Pentatonic Blues'},
'Pentatonic Neutral': {positions: [0, 2, 5, 7, 10], steps: ['whole', 'whole and a half', 'whole', 'whole and a half'], name: 'Pentatonic Neutral'},
// MODES
'Ionian': {positions: [0, 2, 4, 5, 7, 9, 11], steps: ['whole', 'whole', 'half', 'whole', 'whole', 'whole'], name: 'Ionian'},
'Dorian': {positions: [0, 2, 3, 5, 7, 9, 10], steps: ['whole', 'half', 'whole', 'whole', 'whole', 'half'], name: 'Dorian'},
'Phrygian': {positions: [0, 1, 3, 5, 7, 8, 10], steps: ['half', 'whole', 'whole', 'whole', 'half', 'whole'], name: 'Phrygian'},
'Lydian': {positions: [0, 2, 4, 6, 7, 9, 11], steps: ['whole', 'whole', 'whole', 'half', 'whole', 'whole'], name: 'Lydian'},
'Mixolydian': {positions: [0, 2, 4, 5, 7, 9, 10], steps: ['whole', 'whole', 'half', 'whole', 'whole', 'half'], name: 'Mixolydian'},
'Aeolian': {positions: [0, 2, 3, 5, 7, 8, 10], steps: ['whole', 'half', 'whole', 'whole', 'half', 'whole'], name: 'Aeolian'},
'Locrian': {positions: [0, 1, 3, 5, 6, 8, 10], steps: ['half', 'whole', 'whole', 'half', 'whole', 'whole'], name: 'Locrian'},
};

/**
 * Instruments
 */
export const instruments = {
'guitar':    { label: 'guitar',   name: 'Guitar',           nbStrings:  6 },
'bass':      { label: 'bass',     name: 'Bass',             nbStrings:  4 },
'bass-5':    { label: 'bass-5',   name: '5-string bass',    nbStrings:  5 },
'bass-6':    { label: 'bass-6',   name: '6-string bass',    nbStrings:  6 },
'ukulele':   { label: 'ukulele',  name: 'Ukulele',          nbStrings:  4 },
'guitar-7':  { label: 'guitar-7', name: '7-string guitar',  nbStrings:  7 },
};

/**
 * Tunings
 */
export const tunings = {
'guitar': {
  'standard':       ['E',  'A',  'D',  'G',  'B',  'E' ],
  'hstep-down':     ['D#', 'G#', 'C#', 'F#', 'A#', 'D#'],
  'lower-d':        ['D',  'G',  'C',  'F',  'A',  'D' ],
  'drop-d':         ['D',  'A',  'D',  'G',  'B',  'E' ],
  'ddrop-d':        ['D',  'A',  'D',  'G',  'B',  'D' ],
  'drop-c':         ['C',  'G',  'C',  'F',  'A',  'D' ],
  'ddrop-c':        ['C',  'G',  'C',  'F',  'A',  'C' ],
  'higher-f':       ['F',  'A#', 'D#', 'G#', 'C',  'F' ],
  'higher-fs':      ['F#', 'B',  'E',  'A',  'C#', 'F#'],
  'min-thirds':     ['C',  'D#', 'F#', 'A',  'C',  'D#'],
  'maj-thirds':     ['G#', 'C',  'E',  'G#', 'C',  'E' ],
  'all-fourths':    ['E',  'A',  'D',  'G',  'C',  'F' ],
  'aug-fourths':    ['B',  'F',  'B',  'F',  'B',  'F' ],
  'all-fifths':     ['C',  'G',  'D',  'A',  'E',  'B' ],
  'nst':            ['C',  'G',  'D',  'A',  'E',  'G' ],
  'open-a':         ['E',  'A',  'E',  'A',  'C#', 'E' ],
  'open-b':         ['B',  'F#', 'B',  'F#', 'B',  'D#'],
  'open-c':         ['C',  'G',  'C',  'G',  'C',  'E' ],
  'open-csus2':     ['C',  'G',  'C',  'D',  'G',  'C' ],
  'open-d':         ['D',  'A',  'D',  'F#', 'A',  'D' ],
  'open-dm911':     ['D',  'F',  'A',  'C',  'E',  'G' ],
  'open-d6':        ['D',  'A',  'D',  'F#', 'A',  'B' ],
  'open-d6sus2':    ['D',  'A',  'D',  'E',  'A',  'B' ],
  'open-d7':        ['D',  'A',  'D',  'F#', 'A',  'C' ],
  'open-d7sus2':    ['D',  'A',  'D',  'E',  'A',  'C' ],
  'open-dm':        ['D',  'A',  'D',  'F',  'A',  'D' ],
  'open-dm6':       ['D',  'A',  'D',  'F',  'A',  'B' ],
  'open-dm7':       ['D',  'A',  'D',  'F',  'A',  'C' ],
  'open-dsus4':     ['D',  'A',  'D',  'G',  'A',  'D' ],
  'open-e':         ['E',  'B',  'E',  'G#', 'B',  'E' ],
  'open-f':         ['F',  'A',  'C',  'F',  'C',  'F' ],
  'open-g':         ['D',  'G',  'D',  'G',  'B',  'D' ],
},
'guitar-7': {
  'standard':       ['B',  'E',  'A',  'D',  'G',  'B',  'E' ],
  'lower-bf':       ['A#', 'D#', 'G#', 'C#', 'F#', 'A#', 'D#'],
  'lower-a':        ['A',  'D',  'G',  'C',  'F',  'A',  'D' ],
  'higher-c':       ['C',  'F',  'A#', 'D#', 'G#', 'C',  'F' ],
  'higher-cs':      ['C#', 'F#', 'B',  'E',  'A',  'C#', 'F#'],
  'drop-a':         ['A',  'E',  'A',  'D',  'G',  'B',  'E' ],
  'maj-thirds':     ['E',  'G#', 'C',  'E',  'G#', 'C',  'E' ],
  'all-fourths':    ['B',  'E',  'A',  'D',  'G',  'C',  'F' ],
  'choro':          ['C',  'E',  'A',  'D',  'G',  'B',  'E' ],
  'treble':         ['E',  'A',  'D',  'G',  'B',  'E',  'A' ],
  'russian':        ['D',  'G',  'B',  'D',  'G',  'B',  'D' ],
  'russian-var':    ['C',  'G',  'B',  'D',  'G',  'B',  'D' ],
  'big-guitar':     ['G',  'C',  'E',  'G',  'C',  'E',  'G' ],
},
'bass': {
  'standard':       ['E',  'A',  'D',  'G' ],
  'drop-d':         ['D',  'A',  'D',  'G' ],
  'hstep-down':     ['D#', 'G#', 'C#', 'F#'],
  'lower-d':        ['D',  'G',  'C',  'F' ],
  'lower-d-drop-c': ['C',  'G',  'C',  'F' ],
  'all-fifths':     ['C',  'G',  'D',  'A' ],
},
'bass-5': {
  'standard':       ['B', 'E',  'A',  'D',  'G' ],
},
'bass-6': {
  'standard':       ['B',  'E',  'A',  'D',  'G',  'C' ],
},
'ukulele': {
  'standard':       ['G',  'C',  'E',  'A' ],
  'd-tuning':       ['A',  'D',  'F#', 'B' ],
  'baritone':       ['D',  'G',  'B',  'E' ],
  'dorota':         ['E',  'B',  'E',  'A' ],
},
};
