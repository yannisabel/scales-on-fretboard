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
    render() {
        return <div className={ Styles['scale-notes'] }>
            <strong>Scale Notes</strong><br/>
            { this.getScaleNotes().join(', ') }
        </div>;
    }
}
