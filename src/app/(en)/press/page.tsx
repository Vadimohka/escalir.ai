import Image from "next/image";
import { ArrowDown } from "lucide-react";
import PageFrame from "@/components/site/PageFrame";
import { CompanyCTA, CompanyHeading, CompanyMasthead, CompanyTeam } from "@/components/company/CompanyElements";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Press & brand", "Escalir company information, founder profiles and a downloadable brand wordmark. Contact Vitali for press and company enquiries.", "/press");

export default function PressPage() {
  return (
    <PageFrame showContact={false}>
      <div className="co-page co-press">
        <CompanyMasthead eyebrow="Press & brand" title={<>A clear introduction<br />to Escalir</>} description="Company information, people and brand materials in one place. For an interview or additional context, speak directly with Vitali" link={{ href: "#brand-materials", label: "Explore brand materials" }} />
        <section className="co-section co-press-overview">
          <div className="shell co-editorial-split">
            <CompanyHeading eyebrow="About the company" title={<>Escalir,<br />in a few words</>} />
            <div className="co-prose"><p className="co-lead">Escalir develops an innovation management system for regulated enterprises.</p><p>The platform connects three stages: specification of business requests, development of agents and workflows, and governance through quality metrics, versions, access control and audit records.</p><p>Escalir combines this platform with process discovery, focused pilots and training. The approach helps organizations build their own capacity to create, evaluate and maintain automations in their chosen infrastructure.</p></div>
          </div>
        </section>
        <section className="co-section co-warm" id="brand-materials">
          <div className="shell">
            <div className="co-section-top"><CompanyHeading eyebrow="Brand materials" title={<>The Escalir<br />wordmark</>} /></div>
            <div className="co-brand-grid">
              <a className="co-brand-asset" href="/brand/escalir-logo.svg" download="escalir-logo.svg"><div className="co-brand-specimen"><Image src="/brand/escalir-logo.svg" alt="Escalir black wordmark" width={442} height={105} /></div><div className="co-brand-download"><span>Black SVG<small>For light backgrounds</small></span><ArrowDown size={20} aria-hidden="true" /></div></a>
              <a className="co-brand-asset" href="/brand/escalir-logo-white.svg" download="escalir-logo-white.svg"><div className="co-brand-specimen co-brand-specimen-dark"><Image src="/brand/escalir-logo-white.svg" alt="Escalir white wordmark" width={442} height={105} /></div><div className="co-brand-download"><span>White SVG<small>For dark backgrounds</small></span><ArrowDown size={20} aria-hidden="true" /></div></a>
            </div>
            <div className="co-brand-guidance"><p>Use the supplied artwork unchanged. Leave clear space on every side at least equal to the height of the letter “C”. Keep the wordmark at least 80 px wide on screen or 20 mm in print.</p><span>SVG · transparent background · vector format</span></div>
            <div className="co-brand-palette" role="group" aria-labelledby="brand-palette-title">
              <div><h3 className="co-brand-palette-title" id="brand-palette-title">Brand colours</h3></div>
              <ul className="co-brand-swatches">
                <li><span className="co-brand-swatch co-brand-swatch-white" aria-hidden="true" /><span>White<code>#FFFFFF</code></span></li>
                <li><span className="co-brand-swatch co-brand-swatch-green" aria-hidden="true" /><span>Green<code>#22D36B</code></span></li>
                <li><span className="co-brand-swatch co-brand-swatch-black" aria-hidden="true" /><span>Black<code>#000000</code></span></li>
              </ul>
            </div>
          </div>
        </section>
        <section className="co-section" id="founders">
          <div className="shell"><div className="co-section-top"><CompanyHeading eyebrow="Founder profiles" title={<>The people<br />behind Escalir</>} /><p>Meet the founders and find their public profiles. For interviews and company enquiries, contact Vitali</p></div><CompanyTeam compact /></div>
        </section>
        <CompanyCTA eyebrow="Press enquiries" title={<>Need a little<br />more context?</>} description="For questions about Escalir, interview requests or brand materials, message Vitali. Include the topic, publication or organisation, and any deadline so the conversation has a useful starting point" />
      </div>
    </PageFrame>
  );
}
