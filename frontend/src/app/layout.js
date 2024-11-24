import Header from "@/components/Header";
import Footer from "@/components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css'
export const metadata = {
  title: "Hotel Management System",
  description: "Hotel Management System",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
        {children}
        <Footer/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"></script>
      </body>
    </html>
  );
}
