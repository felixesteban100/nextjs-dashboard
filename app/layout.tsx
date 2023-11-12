import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

//TODO:
// the mongodb queries are slow : /
// make so that when you filter the universe the field for filtering teams resets
// add page transition
// add all the filters in the sheet (filterCharacters.tsx)
// fix the static images not showing in the deployment on vercel // now they are showing I don't know how : - |
// add google provider for auth use this docs for guidance: https://authjs.dev/reference/core/providers_google

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}