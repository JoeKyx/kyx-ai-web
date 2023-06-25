import { FC } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { Loader2 } from "lucide-react";

interface PageLoaderProps {}

const PageLoader: FC<PageLoaderProps> = ({}) => {
  const { theme, setTheme } = useTheme();
  const loaderColor = theme === "dark" ? "#F5bc51" : "#000000";
  return <Loader2 className="w-12 h-12 animate-spin" color={loaderColor} />;
};

export default PageLoader;
