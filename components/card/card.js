import { FaEye, FaHeart } from "react-icons/fa"
import Button from "../button/button"

const Card = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Card

{/* <div className="figure"> */ }
{/* <a href="https://www.example.com/">
<img
className="Sirv image-main"
src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-04.png"
/>
<img
className="Sirv image-hover"
data-src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png"
/>
</a> */}
// </div>