import styles from "./FooterBrand.module.css";

/** Fixed English brand signature: keep the wording and logo together in every locale. */
export default function FooterBrand({ href }: { href: string }) {
  return (
    <a
      href={href}
      className={`${styles.signature} notranslate`}
      translate="no"
      lang="en"
      dir="ltr"
      aria-label="Enterprise AI by escalir"
    >
      <span className={styles.prefix} aria-hidden="true">Enterprise AI</span>
      <img className={styles.logo} src="/brand/escalir-logo-white.svg" alt="" width={221} height={58} />
    </a>
  );
}
