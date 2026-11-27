import { ArrowUpRight } from "lucide-react";
import { appCaptures, type AppCaptureId } from "@/lib/app-captures";

type AppScreenshotProps = {
  capture: AppCaptureId;
  href?: string;
  className?: string;
  priority?: boolean;
};

/** A product illustration or recording frame that links to the image by default. */
export default function AppScreenshot({ capture, href, className = "", priority = false }: AppScreenshotProps) {
  const image = appCaptures[capture];
  const illustration = image.illustration;
  const label = illustration ? `Open ${image.title} illustration` : `Open ${image.title} screenshot`;
  return <figure className={`app-capture app-capture-${image.tone} ${className}`} data-illustration={illustration || undefined}>
    <div className="app-capture-stage">
      <a className="app-capture-open" href={href ?? image.src} target={href ? undefined : "_blank"}
        rel={href ? undefined : "noopener noreferrer"} aria-label={href ? image.title : label} style={{ maxWidth: image.width }}>
        <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading={priority ? "eager" : "lazy"} decoding="async" />
        <span className="app-capture-expand" aria-hidden="true"><ArrowUpRight size={16} /></span>
      </a>
    </div>
    <figcaption><span>{image.title}</span><p>{image.caption}</p></figcaption>
  </figure>;
}
