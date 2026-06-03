interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
}

export default function Container({
  children,
  className = "",
  as: Component = "div",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  );
}
