"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  serverClickHandler?(): void;
  clientClickHandler?(): void;
}

export const Button = ({
  children,
  serverClickHandler,
  clientClickHandler,
  className,
}: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => {
        clientClickHandler?.();
        serverClickHandler?.();
      }}
    >
      {children}
    </button>
  );
};
