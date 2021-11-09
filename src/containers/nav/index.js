import React from 'react';
import MenuList from '../../components/menuList';
import MenuSection from '../../components/menuSection';
import classes from "./nav.module.css";

import controller from "../../assets/images/video-game.png"
import rocket from "../../assets/images/startup.png";
import champ from "../../assets/images/trophy.png";
import medal from "../../assets/images/medal.png";
import gem from "../../assets/images/gems.png";

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <div className = {classes.brand_holder}>
                    <img src={controller} width="125px" alt="" />
                    <h1>Retro Cloud</h1>
                </div>

                <MenuSection>
                    <MenuList icon={rocket} title="New Releases"/>
                    <MenuList icon={champ} title="Most Popular"/>
                    <MenuList icon={medal} title="Recomended"/>
                    <MenuList icon={gem} title="Top Chart"/>
                </MenuSection>


                <MenuSection>
                    <MenuList title="My Collection"/>
                    <MenuList title="Bookmark"/>
                    <MenuList title="History"/>
                    <MenuList title="Subscriptions"/>
                </MenuSection>

            </nav>
        );
    }
}

export default Nav;