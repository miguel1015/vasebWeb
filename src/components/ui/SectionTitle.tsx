interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-gray-400" />
      <h2 className="text-center text-2xl font-bold tracking-tight text-primary">
        {children}
      </h2>
      <div className="h-px flex-1 bg-gray-400" />
    </div>
  );
}
