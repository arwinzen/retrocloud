import React from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import classes from './menu.module.css';


class MenuList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            titleText: "Menu One",

        };
    }

    render() {
        return (
            <div className={classes.menu_holder}>
                {
                    this.props.icon !== undefined && (
                        <img className={classes.menu_icon} src={this.props.icon} alt="" />
                    )
                }
                <p>{this.props.title}</p>
                    {/* {
                        this.props.notification !== undefined && (
                            <span>{this.props.notification}</span>
                        )
                    } */}
                
            </div>
        );
    }
}

export default MenuList;