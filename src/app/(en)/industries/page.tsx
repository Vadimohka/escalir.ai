import IndustryDirectory from "@/components/industries/IndustryDirectory";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "AI by Industry",
  "Explore practical escalir AI workflows for banking, telecommunications, healthcare, utilities, insurance, retail and airlines.",
  "/industries",
);

export default function IndustriesPage() {
  return <IndustryDirectory />;
}
