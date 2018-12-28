import React, { Component } from 'react';
import isEqual from './isEqual';


export class PureComponent extends Component {

    setStateAsync(...params) {
        return new Promise((resolve) => {
            this.setState(...params, resolve);
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !isEqual(this.props, nextProps) ||
            !isEqual(this.state, nextState);
    }

}


export default PureComponent;
