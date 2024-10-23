import React, { useEffect, useState } from 'react';
import classes from './Background.module.css';

// Animation Config
import animationConfig from '../../configs/animationContig.js';

// Animations
import { motion as m } from 'framer-motion';

// Data
import backgroundShapes from '../../data/backgroundShapes';

const Background = () => {

    // Function to get random position for shapes
    const getRandomShapePosition = () => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        return { x, y };
    };

    // State for shape positions
    const [shapePositions, setShapePositions] = useState(
        backgroundShapes.map(() => getRandomShapePosition())
    );

    // Set random positions for shapes
    useEffect(() => {
        setShapePositions(backgroundShapes.map(() => getRandomShapePosition()));
        
        const interval = setInterval(() => {
            setShapePositions(backgroundShapes.map(() => getRandomShapePosition()));
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <m.div className={classes.background_shapes}
            variants={animationConfig.container}
            initial="hidden"
            animate="visible"
        >
            {backgroundShapes.map((shape, index) => (
                <m.img
                    key={index}
                    src={shape}
                    className={classes.shape}
                    variants={animationConfig.item}
                    style={{
                        transform: `translate(${shapePositions[index].x}%, ${shapePositions[index].y}%) rotate(${Math.random() * 360}deg)`,
                    }}
                />
            ))}
        </m.div>
    );
};

export default Background;