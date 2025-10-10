import "@/styles/globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import OffCanves from "@/components/offcanves/OffCanves";
import { useRouter } from "next/router"
import { createContext, useEffect, useState } from "react"

export const AppContext = createContext()

export default function App({ Component, pageProps }) {
   const [menuStatus, setMenuStatus] = useState("close")

   const router = useRouter()
   useEffect(() => {
      setMenuStatus("close")
   }, [router.asPath])

   return (
      <AppContext.Provider value={{ menuStatus, setMenuStatus }}>
         <Header />
         <Component {...pageProps} />
         <Footer />
         {menuStatus == 'open' && <OffCanves />}
      </AppContext.Provider>
   )
}