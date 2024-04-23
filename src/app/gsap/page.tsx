import SectionGSAP from "@/components/SectionGSAP/SectionGSAP";

import { homeContent, homeText } from "@/assets/texts/home";

import styles from "../page.module.scss";

export default function GSAP() {
    return (
        <main className={styles.main}>
            {homeContent.map((item) => (
                <SectionGSAP key={item.color} {...item} />
            ))}

            <section className={styles.Section}>
                <p>{homeText}</p>
                <br />
                <p>{homeText}</p>
                <br />
                <p>{homeText}</p>
                <br />
                <p>{homeText}</p>
                <br />
                <p>{homeText}</p>
                <br />
                <p>{homeText}</p>
                <br />
                <p>{homeText}</p>
                <br />
            </section>
        </main>
    );
}
