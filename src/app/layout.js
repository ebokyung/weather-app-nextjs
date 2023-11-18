export const metadata = {
  title: '날씨 앱',
  description: '날씨 앱 만들기 - nextjs typescript',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
