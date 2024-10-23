import { useEffect, useState } from 'react';
import classes from './App.module.css';

// Animation Config
import animationConfig from './configs/animationContig.js';

// Animations
import {AnimatePresence, motion as m } from 'framer-motion'

// Components
import Modal from './components/Modal/Modal.jsx';
import Framework from './components/Framework/Framework.jsx';
import Background from './components/Background/Background.jsx';


function App() {
    const [modalData, setModalData] = useState(null);

    // Function to handle click on project item
    const handleItemClick = (project) => {
        setModalData(project);
    };

    // Function to close modal
    const closeModal = () => {
        setModalData(null);
    };


    return (
        <>
            {/* Main section */}
            <m.main {...animationConfig.main} >
                <Background />
                <div className={classes.title}>
                    My GitHub projects
                </div>
            </m.main>

            {/* Modal */}
            <AnimatePresence>
                {modalData && 
                    <Modal modalData={modalData} closeModal={closeModal} />
                }
            </AnimatePresence>

            {/* Projects section */}
            <div className={classes.projects}>
                <Framework  handleItemClick={handleItemClick} />
            </div>
        </>
    );
}

export default App;