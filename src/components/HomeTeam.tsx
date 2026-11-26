import { ArrowUpRight } from "lucide-react";
import { founderDescriptions } from "@/lib/founder-descriptions";
import styles from "./HomeTeam.module.css";

const team = [
  {
    group: "Escalir team",
    name: "Vitali Bakhmat",
    role: "Co-founder · CEO",
    bio: "Business development and customer partnerships",
    image: "/founders/vitali-bakhmat.webp",
    width: 320,
    height: 400,
  },
  {
    group: "Escalir team",
    name: "Vadim Vladymtsev",
    role: "Co-founder · CTO",
    bio: founderDescriptions.vadim,
    image: "/founders/vadim-vladymtsev.webp",
    width: 320,
    height: 213,
  },
  {
    group: "Escalir team",
    name: "Egor Krychev",
    role: "Co-founder · CAIO",
    bio: founderDescriptions.egor,
    image: "/founders/egor-krychev.webp",
    width: 320,
    height: 320,
  },
  {
    group: "JUSTART VC",
    name: "Bakht Niyazov",
    image: "/founders/bakht-niyazov.webp",
    width: 643,
    height: 620,
  },
  {
    group: "JUSTART VC",
    name: "Iskandar Erkinov",
    image: "/founders/iskandar-erkinov.webp",
    width: 509,
    height: 620,
  },
  {
    group: "JUSTART VC",
    name: "Maxim Tolmachev",
    image: "/founders/maxim-tolmachev.webp",
    width: 461,
    height: 620,
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
          <p>The platform is built by the Escalir team, with operating, investment and ecosystem experience from our Justart partners</p>
        </div>

        <ul className={styles.teamGrid} aria-labelledby="home-team-title">
          {team.map(({ group, name, role, bio, image, width, height }) => (
            <li className={styles.member} key={name}>
              <div className={styles.photo}>
                <img src={image} alt="" width={width} height={height} loading="lazy" decoding="async" />
              </div>
              <h3>{name}</h3>
              <p className={styles.group}>{group}</p>
              {role && <p className={styles.role}>{role}</p>}
              {bio && <p className={styles.bio}>{bio}</p>}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a href="/about-us/">About Escalir<ArrowUpRight size={18} aria-hidden="true" /></a>
          <a href="/careers/">Careers<ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
