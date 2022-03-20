import React from 'react';
import Paper from '@material-ui/core/Paper'
import {ToastContainer} from 'react-toastify';

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper style={{ padding: 40, margin: '0px 0' }} elevation={1}>
                {this.props.children}
                <ToastContainer/>
            </Paper>
        );
    }
}

export default BaseLayout;