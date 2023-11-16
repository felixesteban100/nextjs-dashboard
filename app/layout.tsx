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
// add page transition
// add all the filters in the sheet (filterCharacters.tsx)
// add google provider for auth use this docs for guidance: https://authjs.dev/reference/core/providers_google (nextjs 14 doesn't have support for that :-|)
// in the [id] page save the tab selected using params
// modify the database and remove the teams with parentesis in the names [DONE, FOR THE MOST PART I GUESS]

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