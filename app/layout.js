import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './globals.css';
import Providers from './Providers';

export const metadata = {
  title: 'Favvy Scent Box',
  description: 'Your number one perfume shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          <Hero />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
