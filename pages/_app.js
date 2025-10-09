import "@/styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import OffCanves from "@/components/offcanves/OffCanves";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    <OffCanves />
    </>
    
  );
}
