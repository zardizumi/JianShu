import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class One extends React.Component {
    render(){
        return (
            <div id='one'>
               <h1>123</h1>
               <MuiThemeProvider>
                <FlatButton label="Default" />
                </MuiThemeProvider >
            </div>
        )
    }
}
export default One