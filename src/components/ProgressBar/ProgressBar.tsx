"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

import styles from "./ProgressBar.module.scss";

const ProgressBar = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className={styles.ProgressBar}
            style={{ scaleX: scrollYProgress }}
        ></motion.div>
    );
};

export default ProgressBar;
