import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css'
import Footer from '@/components/Footer';
export const metadata = {

  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout