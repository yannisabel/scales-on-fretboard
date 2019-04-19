import React from "react";
import PropTypes from 'prop-types';

import Styles from "../../styles/main.scss";

export default class Note extends React.Component {
    static propTypes= {
        note: PropTypes.number.isRequired
    }
    render() {
        return <div className={ Styles.note }>{ this.props.note }</div>;
    }
}
