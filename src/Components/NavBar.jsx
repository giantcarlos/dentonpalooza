import { motion } from 'framer-motion';


function NavBar() {

    const item = {
        hidden: { y: -200 },
        show: { y: 0 },
      }
    
    return (
        <nav>
            <motion.div variants={item} initial="hidden" animate="show" transition={{duration: 1.5, delay: 4.25}} className="header">DENTONPALOOZA
            </motion.div>
        </nav>
    )
}

export default NavBar;