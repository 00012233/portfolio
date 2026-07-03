import { projectExperiences } from '@/data/content';
import { CALIGRAPHY_CASES } from '@/data/calligraphy-case';
import CasesClient from './CasesClient';

export function generateStaticParams() {
  return projectExperiences.map((p) => ({ id: p.id }));
}

interface CaseItem {
  id: string;
  title: { zh: string; en: string };
  background: { zh: string; en: string };
  role: { zh: string; en: string };
  process: { zh: string; en: string };
  outcome: { zh: string; en: string };
  reflection: { zh: string; en: string };
}

const projectCases: Record<string, CaseItem[]> = {
  calligraphy: CALIGRAPHY_CASES,
  'student-union': [],
  innovation: [],
};

export default function CasesPage({ params }: { params: { id: string } }) {
  const project = projectExperiences.find((p) => p.id === params.id);
  const cases = projectCases[params.id] || [];
  return <CasesClient id={params.id} project={project ?? null} cases={cases} />;
}
