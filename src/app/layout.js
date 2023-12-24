import { Lato } from 'next/font/google'
import './globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const lato = Lato({ subsets: ['latin'], weight: ['100', '300', '400', '700', '900'] });

export const metadata = {
  title: 'AlwaysGym',
  description: 'Unleash Your Potential at AlwaysGym',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
      {children}
      </body>
    </html>
  )
}
