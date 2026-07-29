import type { Metadata } from "next";
import { CV } from "@/lib/cv";
import { CvDocument } from "@/components/cv/CvDocument";

export const metadata: Metadata = {
  title: {
    absolute: "Manuk's Resume",
  },
  description: `${CV.title} — Curriculum Vitae`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function CvPage() {
  return <CvDocument />;
}
