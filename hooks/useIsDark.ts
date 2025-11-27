import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const useIsDark = () => {
  const [isDark, setIsDark] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return isDark;
};
