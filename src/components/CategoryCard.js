import React from 'react';
import styled from 'styled-components';
import g1 from "../img/Fifa.jpg";
import g2 from "../img/Pubg.jpeg";
import g3 from "../img/Fortnite.jpg";
import g4 from "../img/SixRainbow.jpeg";
import Grid from "@material-ui/core/Grid";
import {Link, Route} from "react-router-dom";
import MediaCard from "./Card";
import TournamentList from "../pages/tournamentList";

// import image name need to be the same as key value
const cardList = [
    {key: "g1", name: "Fifa", image: {g1}},
    {key: "g2", name: "PUBG Mobile", image: {g2}},
    {key: "g3", name: "Fortnite", image: {g3}},
    {key: "g4", name: "Six RainBow", image: {g4}}
];
const Wrapper = styled.div`
       max-width: 1140px;
       margin: 0 auto;
       margin-bottom: 2em;
       padding-bottom: 2em;
       `;
const CategoryCard = props => {
return(
    <Wrapper>
        <Grid container spacing={6}>
            {cardList.map((category=>(
                <Grid item xs={8} sm={3} key={category.key}>
                    <Link to={`${props.url}/${category.name}`}>
                        <MediaCard title={category.name} image={category.image[category.key]}/>
                    </Link>
                </Grid>
            )))}
        </Grid>
        <Route path={`${props.path}/:name`} component={TournamentList}/>
    </Wrapper>
)
};

export default CategoryCard;
