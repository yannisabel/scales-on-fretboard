import React from "react";
import PropTypes from 'prop-types';
import Note from "./Note";

import Styles from '../../styles/main.scss';

export default class Landmark extends React.Component {
    static propTypes= {
        instrument: PropTypes.object.isRequired
    }
    getLabels(semitones) {
        let frets = [];
        for (let i = 0; i < semitones; i++) {
            frets.push(<span className={ Styles.fret } key={ i }><Note note={ i }/></span>);
        }
        return frets;
    }
    render() {
        return <div className={ Styles.landmark }>
            { this.getLabels(this.props.instrument.semitones) }
        </div>;
    }
}
