import React from 'react';
import classes from './menuSection.module.css';
import MenuList from '../menuList';


class MenuSection extends React.Component {
    constructor(props){
        super(props);

    }
    
    render(){
        console.log(this.props);
        return (
            <div style={{marginBottom: "4rem"}}>
                {/* <h1>{this.props.sectionTitle}</h1> */}
                {this.props.children}
            </div>
        )
    }
}

export default MenuSection;