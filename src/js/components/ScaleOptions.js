import React from "react";
import PropTypes from 'prop-types';

import Styles from "../../styles/main.scss";

export default class ScaleOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tuning: this.props.tuning,
            root: this.props.root,
            scale: this.props.scale,
            mode: this.props.mode
        };
    }

    static propTypes= {
        tuning: PropTypes.string.isRequired,
        root: PropTypes.string.isRequired,
        scale: PropTypes.string.isRequired,
        mode: PropTypes.string.isRequired,
        changeOptions: PropTypes.func.isRequired
    }

    handleRootChange(event) {
        const newOptions = Object.assign(this.state, { root: event.target.value });
        this.props.changeOptions(newOptions);
    }

    handleScaleChange(event) {
        const newOptions = Object.assign(this.state, { scale: event.target.value });
        this.props.changeOptions(newOptions);
    }

    handleModeChange(event) {
        const newOptions = Object.assign(this.state, { mode: event.target.value });
        this.props.changeOptions(newOptions);
    }

    handleInstrumentChange(event) {
        const newOptions = Object.assign(this.state, { tuning: event.target.value });
        this.props.changeOptions(newOptions);
    }

    handleSubmit(event) {
        this.props.changeOptions(this.state);
        event.preventDefault();
    }

    getRootList() {
        const roots = ['A','A#/Bb','B','C','C#/Db','D','D#/Eb','E','F','F#/Gb','G','G#/Ab'];
        const rootList = roots.map((root, i) => {
            return <option key={ i } value={ i }>{ root }</option>;
        });
        return rootList;
    }

    getScaleList() {
        const scales = ['Major','Natural Minor', 'Harmonic Minor', 'Melodic Minor', 'Blues'];
        const keyList = scales.map((scale, i) => {
            return <option key={ i } value={ i }>{ scale }</option>;
        });
        return keyList;
    }

    getModeList() {
        const modes = ['Ionian','Dorian','Phrygian','Lydian','Mixolydian','Aeolian','Locrian'];
        const keyList = modes.map((mode, i) => {
            return <option key={ i } value={ i }>{ mode }</option>;
        });
        return keyList;
    }

    getInstrumentList() {
        const instruments = ['4-String Bass', '5-String Bass', '6-String Bass', 'Guitar Standard'];
        const keyList = instruments.map((instruments, i) => {
            return <option key={ i } value={ i }>{ instruments }</option>;
        });
        return keyList;
    }

    render() {
        return <div className={ Styles.options }>
            <form onSubmit={ this.handleSubmit.bind(this) }>
                <label>
                Instruments:<select value={ this.state.tuning } onChange={ this.handleInstrumentChange.bind(this) }>{ this.getInstrumentList() }</select>
                </label>
                <label>
                Root:<select value={ this.state.root } onChange={ this.handleRootChange.bind(this) }>{ this.getRootList() }</select>
                </label>
                <label>
                Scale:<select value={ this.state.scale } onChange={ this.handleScaleChange.bind(this) }>{ this.getScaleList() }</select>
                </label>
                <label>
                Mode:<select value={ this.state.mode } onChange={ this.handleModeChange.bind(this) }>{ this.getModeList() }</select>
                </label>
            </form>
        </div>;
    }
}
