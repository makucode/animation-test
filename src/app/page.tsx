import Section from "@/components/Section/Section";

import { homeContent, homeText } from "@/assets/texts/home";

import styles from "./page.module.scss";

export default function Home() {
    return (
        <main className={styles.main}>
            {homeContent.map((item) => (
                <Section key={item.color} {...item} />
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
