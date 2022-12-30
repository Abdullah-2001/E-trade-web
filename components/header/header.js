import styles from '../../styles/Component.module.css'
import { BsCart, BsHeart, BsPerson } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    return (
        <div style={{ position: "fixed", width: "100%", zIndex: "10000" }}>
            <div className={styles.header}>
                <div className={styles.links_container}>
                    <div>
                        <img src='https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png' />
                    </div>
                    <ul className={styles.nav}>
                        <Link href="/" className={router.pathname == "/" ? styles.active_link : ""}>Home</Link>
                        <Link href="/about" className={router.pathname == "/about" ? styles.active_link : ""}>About</Link>
                        <Link href="/contact" className={router.pathname == "/contact" ? styles.active_link : ""}>Contact us</Link>
                        <Link href="/shops" className={router.pathname == "/shops" ? styles.active_link : ""}>Shops</Link>
                        <Link href="/services" className={router.pathname == "/services" ? styles.active_link : ""}>Services</Link>
                    </ul>
                    <div style={{ display: "flex" }}>
                        <div>
                            <BsHeart size={25} className={styles.heart_icon} />
                        </div>
                        <div style={{ position: "relative" }}>
                            <span className={styles.cart_count}>10</span>
                            <BsCart size={25} style={{ margin: "0 20px" }} className={styles.cart_icon} />
                        </div>
                        <div>
                            <BsPerson size={25} className={styles.user_icon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}