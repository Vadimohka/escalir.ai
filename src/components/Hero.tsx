import TelegramLink from "./TelegramLink";
import { heroMedia } from "@/lib/hero-media";

export default function Hero() {
  return <>
    <link rel="preload" as="image" href={heroMedia.poster} imageSrcSet={`${heroMedia.posterMobile} 768w, ${heroMedia.poster} 1600w`} imageSizes="100vw" fetchPriority="high" />
    <section className="hero" id="home" aria-labelledby="hero-title">
      <picture className="hero-image">
        <source media="(max-width: 640px)" srcSet={heroMedia.posterMobile} width={768} height={432} />
        <img src={heroMedia.poster} srcSet={`${heroMedia.posterMobile} 768w, ${heroMedia.poster} 1600w`} sizes="100vw" width={1600} height={900} alt="" fetchPriority="high" />
      </picture>
      <div className="hero-shade" aria-hidden="true" />
      <div className="shell hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow">Enterprise AI</p>
          <h1 id="hero-title">Enterprise AI<br />From request<br /><span>to reviewed result</span></h1>
          <p className="hero-lead">For regulated enterprises, Escalir connects specification, development and governance in your environment. Each decision keeps an owner, an approved source and a human review point</p>
          <div className="hero-actions"><TelegramLink className="btn btn-light">Get in touch</TelegramLink><a className="btn btn-outline-light" href="/platform/">Explore the platform</a></div>
        </div>
      </div>
    </section>
    <div className="principles-strip"><div className="shell principles-inner">
      <p>Three stages, one connected platform</p>
      <ul aria-label="The Escalir operating cycle"><li>Specification</li><li>Development</li><li>Governance</li></ul>
    </div></div>
  </>;
}

