"use client";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { store } from "@/_libs/store";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
            <ThemeProvider theme={baselightTheme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
        
        </Provider>
      </body>
    </html>
  );
}
