import React from "react";
import PropTypes from 'prop-types';

import Styles from '../../styles/main.scss';

export default class Fret extends React.Component {
    static propTypes= {
        highlightClassName: PropTypes.string.isRequired,
        note: PropTypes.number.isRequired
    }
    getNote(num) {
        const octave = 12;
        while(num >= octave) {
            num -= octave;
        }
        const noteArray = ['A','A#/Bb','B','C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab'];
        return noteArray[num];
    }
    render() {
        return <div className={`${ Styles.fret }`}>
            <span className={`${ Styles.note } ${ this.props.highlightClassName }`}>{ this.getNote(this.props.note) }</span>
        </div>;
    }
}
