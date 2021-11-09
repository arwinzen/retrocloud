import React from 'react';
import Collection from '../../../components/collection';

import classes from "./content.module.css";

const DATA = [
    {
        id : '1',
        name: 'Hollow Knight',
        genre: 'Metroidvania',
        rating: 10,
        url : 'assets/games/hollowKnight.jpg'
    },
    {
        id : '2',
        name: 'Bastion',
        genre: 'Action RPG',
        rating: 8,
        url : 'assets/games/bastion3.jpg'
    },
    {
        id : '3',
        name: 'Celeste',
        genre: 'Platformer',
        rating: 3,
        url : 'assets/games/celeste.png'
    },
    {
        id : '4',
        name: 'Final Fantasy Tactics',
        genre: 'Tactical RPG',
        rating: 5,
        url : 'assets/games/fftactics2.jpg'
    },
    {
        id : '5',
        name: 'Hyper Light Drifter',
        genre: 'Action RPG',
        rating: 5,
        url : 'assets/games/drifter2.png'
    },
    {
        id : '6',
        name: 'Link Between Worlds',
        genre: 'Action Adventure',
        rating: 5,
        url : 'assets/games/link.jpg'
    },
    {
        id : '7',
        name: 'Hades',
        genre: 'Rogue Lite',
        rating: 5,
        url : 'assets/games/hades.png'
    },
    {
        id : '8',
        name: 'JAK 3',
        genre: 'Semi Open World RPG',
        rating: 5,
        url : 'assets/games/jak.jfif'
    }
];

class Content extends React.Component {
    render(){
        return (
            <div className={ classes.collectionWrapper} style={{ display:"flex", flexWrap: "wrap"}}>
                { DATA.map(game => 
                    <Collection name={game.name} url={game.url} genre={game.genre} rating={game.rating}/>)
                }
            </div>
        );
    }
}

export default Content;