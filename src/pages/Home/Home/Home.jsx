/* eslint-disable no-unused-vars */
import React from 'react';
import Hero from '../Hero/Hero';
import Chefs from '../Chefs/Chefs';
import Statistics from '../Statistics/Statistics';
import NewsLetter from '../NewsLetter/NewsLetter';



const Home = () => {
    return (
        <div>
            <Hero></Hero>
          
             <Chefs></Chefs>
           
            <Statistics></Statistics>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;