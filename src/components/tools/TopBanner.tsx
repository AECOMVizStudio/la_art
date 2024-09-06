import React, { useState } from 'react';

import Translator from "./Translator";

const TopBanner: React.FC = () => {


    return (
        <div className='bg-burnt-orange flex justify-between items-center'>
            <img src="/CAgov.png" alt="CAgov Logo" id='translation-logo' />
            <Translator />
        </div>
    );
    
};


export default TopBanner;