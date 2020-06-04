import React from 'react';
import Carousel from 'react-elastic-carousel'
import styled from "styled-components";
import {useQuery} from "@apollo/client";
import {GET_IMAGES} from "../gql/query";
import CategoryCard from "../components/CategoryCard";

const Item = styled.div`        
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 100%;
  background-color: #182039;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;
const Img = styled.img`
  max-height: 100%;
  max-width:100%;
`;

const Home =()=>{

    const { data, loading, error } = useQuery(GET_IMAGES);
    // if the data is loading, display a loading message
    if (loading) return <p>Loading...</p>;
    // if there is an error fetching the data, display an error message
    if (error) return <p>Error!</p>;
    let imageUrl = "http://localhost:3002/uploads/";
    return (
        <React.Fragment>
            <Carousel itemsToShow={1}>
                {data.images.map(image=>(
                    <Item key={image.id}>
                        <Img src={`${imageUrl}/${image.imageName}`} alt="image"/>
                    </Item>
                ))}
            </Carousel>
            <CategoryCard path={"category"} url={"category"}/>
        </React.Fragment>
    )
};

export default Home;
