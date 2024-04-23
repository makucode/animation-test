"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import styles from "./Section.module.scss";

const Section = ({
    title,
    content1,
    content2,
    color,
}: {
    title: string;
    content1: string;
    content2: string;
    color: string;
}) => {
    const el = useRef(null);
    const { scrollYProgress } = useScroll({
        target: el,
        /* offset: ["start end", "center end"], // rev */
        offset: ["center center", "end start"],
    });

    const eased = scrollYProgress;

    const opacity = useTransform(eased, [0, 1], [1, 0]);
    const scale = useTransform(eased, [0, 1], [1, 0.5]);
    const transform = useTransform(eased, [0, 1], [0, 500]);

    return (
        <section className={styles.Section} ref={el}>
            <motion.div
                className={styles.Wrapper}
                style={{
                    backgroundColor: color,
                    opacity,
                    scale,
                    y: transform,
                    z: 1.01,
                }}
            >
                <h2>{title}</h2>
                <p>{content1}</p>
                <p>{content2}</p>
            </motion.div>
        </section>
    );
};

export default Section;
