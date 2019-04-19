import React from "react";
import PropTypes from 'prop-types';
import String from "./String";

import Styles from '../../styles/main.scss';

export default class FretBoard extends React.Component {
    static propTypes= {
        fretboard: PropTypes.array.isRequired,
        highlight: PropTypes.array.isRequired,
        options: PropTypes.object.isRequired
    }
    render() {
        return <div className={ Styles.fretboard }>
            { this.props.fretboard.map((notes, index) => {
                return <String key={ index } noteArray={ notes } highlight={ this.props.highlight } root={ this.props.options.root } mode={ this.props.options.mode }/>;
            }) }
        </div>;
    }
}
