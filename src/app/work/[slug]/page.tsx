import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/case-studies/CaseStudyView";
import { Header } from "@/components/layout/Header";
import {
  getAllCaseStudySlugs,
  getCaseStudy,
} from "@/lib/case-studies";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: {
        absolute: "Manuk's Portfolio",
      },
    };
  }

  return {
    title: {
      absolute: "Manuk's Portfolio",
    },
    description: study.subtitle,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-[var(--header-height)]">
        <CaseStudyView study={study} />
      </main>
    </>
  );
}
