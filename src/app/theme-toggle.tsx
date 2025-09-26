// "use client";

// import { useTheme } from "next-themes";
// import { FaMoon, FaSun } from "react-icons/fa6";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 p-2 text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
//       aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
//       title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
//     >
//       {theme === "dark" ? (
//         <FaSun className="h-5 w-5" />
//       ) : (
//         <FaMoon className="h-5 w-5" />
//       )}
//     </button>
//   );
// }
"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevent mismatch

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle theme
    </button>
  );
}
