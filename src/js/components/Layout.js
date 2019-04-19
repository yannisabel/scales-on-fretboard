import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import ScaleOptions from "./ScaleOptions";
import Landmark from "./Landmark";
import FretBoard from "./FretBoard";
import ScaleNotes from "./ScaleNotes";

import Styles from "../../styles/main.scss";

export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.buildState();
    }

    buildState() {
        let newState = {
            instrument: {
                tuning:[],
                semitones:25,
                octave:12
            },
            fretboard: [],
            highlight: [],
            options: {
                tuning: '0',
                root: '0',
                scale: '0',
                mode: '0'
            }
        }
        newState.instrument.tuning = this.buildTuning(newState);
        newState.fretboard = this.buildFretboard(newState);
        newState.highlight = this.buildHighlights(newState);
        return newState;
    }

    buildFretboard(newState){
        let fretboard = [];
        for (let i = 0; i < newState.instrument.tuning.length; i++) {
            let notes = [];
            for(let n = 0; n < newState.instrument.semitones; n++) {
                let note = newState.instrument.tuning[i]+n;
                notes.push(note);
            }
            fretboard.push(notes);
        }
        return fretboard
    }

    buildHighlights(newState){
        let highlight = [];
        if(newState.options.scale === '0') {
            highlight = [0, 2, 4, 5, 7, 9, 11];
        }
        else if(newState.options.scale === '1') {
            highlight = [0, 2, 3, 5, 7, 8, 10];
        }
        else if(newState.options.scale === '2') {
            highlight = [0, 2, 3, 5, 7, 8, 11]
        }
        else if(newState.options.scale === '3') {
            highlight = [0, 2, 3, 5, 7, 9, 11];
        }
        else if(newState.options.scale === '4') {
            highlight = [0, 3, 5, 6, 7, 10];
        }
        return highlight;
    }

    buildTuning(newState){
        const A = 0;
        //const ASharp = 1;
        const B = 2;
        const C = 3;
        //const CSharp = 4;
        const D = 5;
        //const DSharp = 6;
        const E = 7;
        //const F = 8;
        //const FSharp = 9;
        const G = 10;
        //const GSharp = 11;

        let tuningArr = [];
        if(newState.options.tuning === '0') {
            tuningArr = [E,A,D,G];
        }
        else if(newState.options.tuning === '1') {
            tuningArr = [B,E,A,D,G];
        }
        else if(newState.options.tuning === '2') {
            tuningArr = [B, E, A, D, G, C];
        }
        else if(newState.options.tuning === '3') {
            tuningArr = [E,A,D,G,B,E];
        }
        tuningArr.reverse();
        return tuningArr;
    }

    changeOptions(newOptions) {
        let newState = Object.assign( {}, this.state);
        newState.options = newOptions;
        newState.instrument.tuning = this.buildTuning(newState);
        newState.fretboard = this.buildFretboard(newState);
        newState.highlight = this.buildHighlights(newState);
        this.setState(newState);
    }

    render() {
        return <Router basename="/">
            <div className={ Styles.Layout }>
                <ScaleOptions changeOptions={ this.changeOptions.bind(this) } tuning={ this.state.options.tuning } root={ this.state.options.root } scale={ this.state.options.scale } mode={ this.state.options.mode }/>
                <Landmark instrument={ this.state.instrument }/>
                <FretBoard fretboard={ this.state.fretboard } options={ this.state.options } highlight={ this.state.highlight } />
                <ScaleNotes options={ this.state.options } highlight={ this.state.highlight }/>
            </div>
        </Router>;
    }
}
