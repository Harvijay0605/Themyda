"use client";

import { type PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

type propsType = PropsWithChildren;

const NextThemeProvider = ({ children }: propsType) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="antialiased">{children}</div>
    </ThemeProvider>
  );
};

export default NextThemeProvider;
