import React from 'react';
import Paper from '@material-ui/core/Paper'

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper style={{ padding: 40, margin: '0px 0' }} elevation={1}>
                {this.props.children}
            </Paper>
        );
    }
}

export default BaseLayout;