import React, { createContext, useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { themes } from "core/design";

const DEFAULT_THEME = themes.dark;

const AppThemeContext = createContext({
  state: DEFAULT_THEME,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  change: function (t: typeof DEFAULT_THEME): void {}
});

export function useAppTheme(): typeof DEFAULT_THEME {
  const appTheme = useContext(AppThemeContext);
  if (appTheme === undefined) {
    throw new Error("useAppTheme must be used within a AppThemeProvider");
  }
  return appTheme.state;
}

export function useAppThemeChanger(theme: keyof typeof themes): void {
  const appTheme = useContext(AppThemeContext);
  if (appTheme === undefined) {
    throw new Error("useAppTheme must be used within a AppThemeProvider");
  }
  const newTheme = themes[theme];
  appTheme.change(newTheme);
}

type AppThemeProviderProps = { children: React.ReactNode };
export function AppThemeProvider(props: AppThemeProviderProps): JSX.Element {
  const [appTheme, setAppTheme] = useState(DEFAULT_THEME);

  return (
    <AppThemeContext.Provider value={{ state: appTheme, change: setAppTheme }}>
      <ThemeContext.Provider value={appTheme}>{props.children}</ThemeContext.Provider>
    </AppThemeContext.Provider>
  );
}
