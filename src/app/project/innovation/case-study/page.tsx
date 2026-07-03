import { projectExperiences } from '@/data/content';
import InnovationCaseClient from './InnovationCaseClient';

export default function InnovationCaseStudyPage() {
  const project = projectExperiences.find((p) => p.id === 'innovation');
  return <InnovationCaseClient project={project ?? null} />;
}
