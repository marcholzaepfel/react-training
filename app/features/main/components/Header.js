import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { ListItem } from "material-ui";

export class Header extends React.Component {

    render() {

        return (
            <div>
                <AppBar title={this.props.title} />
                <AppBar title={this.props.title2} />
        
                
                {this.props.userList10.map((loc, index) => 
                   <div>
                       {loc}
                       </div>
                )}
                
            </div>
        );
    }
}