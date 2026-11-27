import TelegramLink from "./TelegramLink";

export default function FooterContact({ className }: { className: string }) {
  return <>
    <TelegramLink className={className}>Get in touch</TelegramLink>
    <p className="footer-investor-waitlist">We invite investors to join our waitlist.</p>
  </>;
}
