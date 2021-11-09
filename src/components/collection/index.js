import React from 'react';
import classes from './collection.module.css';

class Collection extends React.Component {
    render(){
        return(

            <div className={classes.game_holder}>
                <div>
                    <img className={classes.game_poster} src={this.props.url} />
                </div>
                <div>
                    <p>{this.props.name}</p>
                    <p className={classes.game_genre}>{this.props.genre}</p>
                </div>
            </div>


            // <div className={classes.profile_holder}>
            //     <div className={classes.profile_upper}>
            //         <div>
            //             <div className={classes.profile_pic}></div>
            //             <div>
            //                 <h5>{this.props.name}</h5>
            //                 <p>{this.props.status}</p>
            //             </div>
            //         </div>
            //         <div className={classes.profile_setting}></div>
            //     </div>

            //     <div className={classes.profile_lower}>
            //         <div>
            //             <p  className={`${classes.profile_rating} ${this.props.rating > 3 ? classes.high_rating : classes.low_rating}`}>
            //                 {this.props.rating} Star Rating
            //             </p>
            //         </div>
            //         <div>
            //             <img src={icon_1} alt=""/>
            //             <img src={icon_2} alt=""/>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default Collection;