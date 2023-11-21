import './header.css'
import React, { useState, useEffect } from 'react';

const getDate = () => {
    const date = new Date(); // Month is zero-based
    return date;
  };


function Header(){
    const date = getDate();

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 800); // Adjust the threshold as needed
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
        }, []);


    return(
        <>
            <header>
                <div className='headSpace headName'>
                    <div className='headElem'>
                        <img src="src/assets/TFIicon.png" alt="logo" />
                        <p>{isSmallScreen ? '' : 'Tennessee Feedmill Inc.'}</p>
                    </div>
                </div>
                
                <div className='headSpace headDate'>
                    <div className='headElem divDate'>
                        {date.getMonth() + 1}
                    </div>

                    <div className='headElem divDate'>
                        {date.getDate()}
                    </div>
                    
                    <div className='headElem divDate'>
                        {date.getFullYear()}
                    </div>
                </div>

                <div className='headSpace headButtons'>
                    <div className='headElem'>
                        <input type="image" src="src/assets/mdi_calendar.svg" alt="calendar" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header