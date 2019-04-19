import React from "react";
import PropTypes from 'prop-types';
import Fret from "./Fret";

import Styles from "../../styles/main.scss";

export default class String extends React.Component {
    constructor(props) {
        super(props);
    }
    static propTypes= {
        root: PropTypes.string.isRequired,
        highlight: PropTypes.array.isRequired,
        mode: PropTypes.string.isRequired,
        noteArray: PropTypes.array.isRequired
    }
    isRoot(note) {
        if (note % 12 == Number(this.props.root) + Number(this.props.highlight[Number(this.props.mode)]) % 12) {
            return true;
        }
        else {
            return false;
        }
    }
    isHighlight(note) {
        let found = -1;
        for (let highlight in this.props.highlight) {
            const number1 = (this.props.highlight[highlight] + Number(this.props.root)) % 12;
            const number2 = note % 12;
            if (number1 === number2) {
                found = Number(highlight);
                break;
            }
        }
        return found;
    }
    render() {
        return <div className={ Styles.string }>
            { this.props.noteArray.map((note, index) => {
                let highlightClassName = Styles.lowlight;
                let num = this.isHighlight(note);
                if (num > -1) {
                    highlightClassName = `${ Styles.highlight } ${ Styles.highlight + num }`;
                }
                if (this.isRoot(note)) {
                    highlightClassName = Styles.root;
                }
                return <Fret key={ index } note={ note } highlightClassName={ highlightClassName } />;
            }) }
        </div>;
    }
}
