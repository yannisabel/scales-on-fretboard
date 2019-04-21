import React from "react";
import PropTypes from 'prop-types';

import Styles from "../../styles/main.scss";

export default class ScaleNotes extends React.Component {
    static propTypes= {
        octaveCount: PropTypes.string,
        highlight: PropTypes.array.isRequired,
        options: PropTypes.object.isRequired
    }
    getNote(num) {
        const noteArray = ['A','A#/Bb','B','C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab'];
        const octave = 12;
        while(num >= octave) {
            num -= octave;
        }
        return noteArray[num];
    }
    getScaleNotes() {
        const highlight = this.props.highlight;
        let scaleNotes = [];
        for (let i = 0; i < highlight.length; i++) {
            scaleNotes.push(
                this.getNote(highlight[i] + Number(this.props.options.root))
            );
        }
        return scaleNotes;
    }
    getInterval() {
        const highlight = this.props.highlight;
        let interval = [];
        let difference;
        for (let i = 1; i < highlight.length; i++) {
            difference = highlight[i] - highlight[i - 1];
            if (difference == 1) {
                difference = '1/2';
            }
            else if (difference == 2) {
                difference = '1';
            }
            else if (difference == 3) {
                difference = '1,5';
            }
            interval.push(
                difference
            );
        }
        return interval
    }
    render() {
        return <div className={ Styles['scale-notes'] }>
            <strong>Scale Notes:</strong><br/>
            <p>{ this.getScaleNotes().join(', ') }</p>
            <strong>Intervals:</strong><br/>
            <p>{ this.getInterval().join(' - ') }</p>
            <span className={ Styles['intervals-legend'] }>1/2 = Semitone, 1 = Tone, 1,5 = 1 tone and a half</span>
        </div>;
    }
}
