import React from 'react';
import HeroSection from "../../HeroSection";
import { homeObjFour } from './Data';

// I basically copied Home.js here.

const SignUp = () => {
    return (
        <>
            <HeroSection {...homeObjFour} />
        </>
    );
};

export default SignUp;
