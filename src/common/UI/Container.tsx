import { cn } from "utils/cn";

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container(props: ContainerProps) {
  const { children, className } = props;

  return (
    <div className={cn("container mx-auto max-w-[1094px] px-3", className)}>
      {children}
    </div>
  );
}
