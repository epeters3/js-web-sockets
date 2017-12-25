import React from 'react';
import io from 'socket.io-client';

class SocketIO extends React.Component {

    static defaultProps = {
        eventType: 'chat message'
    };

    constructor(props) {
        super(props);
        this.state = { data: []};
        this.socket = io();
        this.socket.on(props.eventType, data => {
            this.setState(oldState => ({data: [...oldState.data, data]}));
        });
    }

    emit = (data) => {
        const { eventType } = this.props;
        this.socket.emit(eventType, data);
    }

    render() {
        const { children } = this.props;
        const { data } = this.state;
        return children({emit: this.emit, data});
    }
};

export default SocketIO;