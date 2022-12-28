import { useRouter } from "next/router";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import {CgArrowUp} from "react-icons/cg";

export default function Layout({ children }) {
    const router = useRouter()
    const showLayout = router.pathname === "/login" || router.pathname === "/signup" ? false : true
    return (
        <>
            {showLayout && <Header />}
            {children}
            <div className="back-to-top" onClick={() => window.scrollTo({ behavior: "smooth", top: 0 })}>
                <CgArrowUp />
            </div>
            {/* {showLayout && <Footer />} */}
        </>
    )
}
