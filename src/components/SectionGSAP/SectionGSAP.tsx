"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./SectionGSAP.module.scss";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const SectionGSAP = ({
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
    const ref = useRef(null);

    useGSAP(() => {
        const el = ref.current;
        gsap.fromTo(
            el,
            { autoAlpha: 1, scale: 1, y: 0, z: 1.01, filter: `blur(${0}px)` },
            {
                autoAlpha: 0,
                scale: 0.5,
                y: "50%",
                z: 1.01,
                filter: `blur(${20}px)`,
                scrollTrigger: {
                    trigger: el,
                    start: "center center",
                    end: "bottom start",
                    scrub: true,
                    markers: true,
                },
            }
        );
    }, []);

    return (
        <section className={styles.Section} ref={ref}>
            <div
                className={styles.Wrapper}
                style={{
                    backgroundColor: color,
                }}
            >
                <h2>{title}</h2>
                <p>{content1}</p>
                <p>{content2}</p>
            </div>
        </section>
    );
};

export default SectionGSAP;
