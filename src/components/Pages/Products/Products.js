import React from 'react';
import HeroSection from "../../HeroSection";
import { homeObjOne } from './Data';

// I basically copied Home.js here.

const Products = () => {
    return (
        <>
            <HeroSection {...homeObjOne} />
        </>
    );
};

export default Products;
