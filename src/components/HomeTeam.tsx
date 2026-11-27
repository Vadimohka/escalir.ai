import { ArrowUpRight } from "lucide-react";
import { founderDescriptions } from "@/lib/founder-descriptions";
import { JUSTART_URL } from "@/lib/site";
import styles from "./HomeTeam.module.css";

const founders = [
  {
    name: "Vitali Bakhmat",
    role: "Co-founder · CEO",
    bio: "Business development and customer partnerships",
    image: "/founders/vitali-bakhmat.webp",
    width: 320,
    height: 400,
  },
  {
    name: "Vadim Vladymtsev",
    role: "Co-founder · CTO",
    bio: founderDescriptions.vadim,
    image: "/founders/vadim-vladymtsev.webp",
    width: 320,
    height: 213,
  },
  {
    name: "Egor Krychev",
    role: "Co-founder · CAIO",
    bio: founderDescriptions.egor,
    image: "/founders/egor-krychev.webp",
    width: 320,
    height: 320,
  },
];

export default function HomeTeam() {
  return (
    <section className={styles.section} id="team" aria-labelledby="home-team-title">
      <div className="shell">
        <div className={styles.intro}>
          <div>
            <p className="eyebrow">The people behind Escalir</p>
            <h2 id="home-team-title">Meet the people<br />behind the work</h2>
          </div>
          <div className={styles.partner}>
            <p>The platform is built by the Escalir team, with operating, investment and ecosystem experience from our Justart partners</p>
            <a className={styles.partnerLink} href={JUSTART_URL} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">
              <img src="/brand/justart-logo.svg" alt="JUSTART VC" width={239} height={64} loading="lazy" decoding="async" />
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <ul className={styles.teamGrid} aria-labelledby="home-team-title">
          {founders.map(({ name, role, bio, image, width, height }) => (
            <li className={styles.member} key={name}>
              <div className={styles.photo}>
                <img src={image} alt="" width={width} height={height} loading="lazy" decoding="async" />
              </div>
              <h3>{name}</h3>
              <p className={styles.group}>Escalir team</p>
              <p className={styles.role}>{role}</p>
              <p className={styles.bio}>{bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
