import { experiences } from '@/data/experience';
import ProjectDetailClient from './ProjectDetailClient';

export function generateStaticParams() {
  return experiences.map((e) => ({ id: e.id }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProjectDetailClient id={params.id} />;
}
