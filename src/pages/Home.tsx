import * as React from 'react';
import Hero from '../assets/components/Hero';

import '../assets/scss/Home.scss'
export interface Props {
    
}
 
const Home: React.FC<Props> = () => {
    return ( 
        <div className="Home">
            <Hero/>
        </div>
     );
}
 
export default Home;