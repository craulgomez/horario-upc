// Paleta accesible y contrastante de colores para bloques de materias en el horario
export interface SubjectColor {
  bg: string;
  border: string;
  text: string;
  badge: string;
}

export const SUBJECT_COLORS: SubjectColor[] = [
  { bg: 'bg-emerald-100', border: 'border-emerald-500', text: 'text-emerald-900', badge: 'bg-emerald-600' },
  { bg: 'bg-blue-100', border: 'border-blue-500', text: 'text-blue-900', badge: 'bg-blue-600' },
  { bg: 'bg-amber-100', border: 'border-amber-500', text: 'text-amber-900', badge: 'bg-amber-600' },
  { bg: 'bg-purple-100', border: 'border-purple-500', text: 'text-purple-900', badge: 'bg-purple-600' },
  { bg: 'bg-rose-100', border: 'border-rose-500', text: 'text-rose-900', badge: 'bg-rose-600' },
  { bg: 'bg-teal-100', border: 'border-teal-500', text: 'text-teal-900', badge: 'bg-teal-600' },
  { bg: 'bg-indigo-100', border: 'border-indigo-500', text: 'text-indigo-900', badge: 'bg-indigo-600' },
  { bg: 'bg-orange-100', border: 'border-orange-500', text: 'text-orange-900', badge: 'bg-orange-600' },
  { bg: 'bg-cyan-100', border: 'border-cyan-500', text: 'text-cyan-900', badge: 'bg-cyan-600' },
  { bg: 'bg-violet-100', border: 'border-violet-500', text: 'text-violet-900', badge: 'bg-violet-600' },
];

export function getSubjectColor(identifier: string | number): SubjectColor {
  let hash = 0;
  const str = String(identifier);
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % SUBJECT_COLORS.length;
  return SUBJECT_COLORS[index];
}
