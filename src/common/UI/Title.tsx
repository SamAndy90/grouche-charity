import { cn } from "utils/cn";

export type TitleProps = {
  children: React.ReactNode;
  component?: React.ElementType;
  className?: string;
};

export function Title(props: TitleProps) {
  const { children, component: Component = "h2", className } = props;

  return (
    <Component className={cn("text-3xl font-bold", className)}>
      {children}
    </Component>
  );
}
