import Hamburger from 'hamburger-react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';


function NavBar() {


    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const scrollWithOffset2 = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -50; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const scrollWithOffset3 = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -120; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const item = {
        hidden: { y: -200 },
        show: { y: 0 },
      }
    

    return (
        <nav>
            <div variants={item} initial="hidden" animate="show" transition={{duration: 1, delay:.75}} className="header">DENTONPALOOZA
            </div>
        </nav>
    )
}

export default NavBar;