import { projectExperiences, caseStudies } from '@/data/content';
import ProjectDetailClient from './ProjectDetailClient';

export function generateStaticParams() {
  return projectExperiences.map((p) => ({ id: p.id }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectExperiences.find((p) => p.id === params.id);
  const caseStudy = caseStudies.find((c) => c.id === params.id || project?.id === c.id);
  return <ProjectDetailClient id={params.id} project={project ?? null} caseStudy={caseStudy ?? null} />;
}
