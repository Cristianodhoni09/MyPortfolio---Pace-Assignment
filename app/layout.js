import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './styles/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
        <meta name="description" content="A portfolio showcasing my work, skills, and achievements." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
