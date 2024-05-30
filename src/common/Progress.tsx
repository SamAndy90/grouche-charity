"use client";

import { useEffect, useState } from "react";

export const Progress = ({
  current,
  total,
}: {
  current: number;
  total: number;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((current / total) * 100);
  }, [total, current]);

  return (
    <div className={"h-1.5 w-full overflow-hidden rounded-full bg-astra-950"}>
      <div
        style={{ width: `${progress}%` }}
        className={`bg-gradient-turquoise h-full rounded-full transition-[width] duration-500`}
      ></div>
    </div>
  );
};
