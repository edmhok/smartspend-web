
import './globals.css'
import './layout.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ThemeProvider, createTheme } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SmartSpend',
  description: 'Ecommerce',
}

// const themeTest = createTheme({
//   palette: {
//     primary: {
//       main: '#fff',
//     },
//     secondary: {
//       main: '#218c20',
//     },
//   },
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <ThemeProvider theme={themeTest}> */}
      <body className={inter.className}>
        {children}
      </body>
      {/* </ThemeProvider> */}
    </html>
  )
}
