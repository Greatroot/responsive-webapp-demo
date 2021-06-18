import React from 'react';
import HeroSection from "../../HeroSection";
import { homeObjTwo } from './Data';
import Pricing from "../../Pricing";

// I basically copied Home.js here.

const Services = () => {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjTwo } />
        </>
    );
};

export default Services;
