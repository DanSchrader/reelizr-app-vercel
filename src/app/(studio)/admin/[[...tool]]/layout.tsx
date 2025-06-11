import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Studio',
  description: 'Content management system',
  robots: 'noindex, nofollow',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body style={{ margin: 0, padding: 0, height: '100vh', overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  )
}