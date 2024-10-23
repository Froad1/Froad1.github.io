import React from 'react';
import classes from './Modal.module.css';


// Animation Config
import animationConfig from '../../configs/animationContig.js';

// Animations
import {motion as m } from 'framer-motion'

const Modal = ({ modalData, closeModal }) => {
    return (
        <>
            <m.div {...animationConfig.overlay} className={classes.overlay} onClick={closeModal}></m.div>
            <m.div {...animationConfig.modal} className={`${classes.modal} ${modalData.mobile ? classes.mobile : classes.desktop}`}>
                <a href={modalData.link} target='_blank' className={classes.imageLink}>
                        <div className={classes.img_overlay}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000"><path d="M450-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h170v60H280q-58.33 0-99.17 40.76-40.83 40.77-40.83 99Q140-422 180.83-381q40.84 41 99.17 41h170v60ZM325-450v-60h310v60H325Zm185 170v-60h170q58.33 0 99.17-40.76 40.83-40.77 40.83-99Q820-538 779.17-579q-40.84-41-99.17-41H510v-60h170q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H510Z" /></svg>
                        </div>
                        <img src={modalData.img} alt={modalData.name} />
                </a>
                <div className={classes.project_info}>
                    <a href={modalData.link} target='_blank'>{modalData.name}</a>
                    <p>{modalData.description}</p>
                </div>
                <button className={classes.close_modal} onClick={closeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000">
                        <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                    </svg>
                </button>
            </m.div>
        </>
    );
};


export default Modal;