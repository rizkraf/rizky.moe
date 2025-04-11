interface SkillBadgeProps {
  name: string;
  color: string;
}

export function SkillBadge({ name, color }: SkillBadgeProps) {
  return (
    <div
      className={`${color} border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0)] transition-all`}
    >
      <span className="font-bold text-lg">{name}</span>
    </div>
  );
}
