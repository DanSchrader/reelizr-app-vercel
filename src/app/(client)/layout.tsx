import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import theme from '../../theme';
import ResponsiveAppBar from '../../components/NavBar';

export const metadata: Metadata = {
  title: "Reelizr",
  description: "Business Podcasts und Video Content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <Box component="body">
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ResponsiveAppBar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </Box>
    </html>
  );
}
