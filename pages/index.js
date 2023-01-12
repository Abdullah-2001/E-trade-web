import { Col, Container, Row } from 'react-bootstrap'
import Button from '../components/button/button'
import styles from '../styles/Home.module.css'
import { BsCart } from 'react-icons/bs'
import { FaEye, FaFire, FaHeadphones, FaHeart, FaSalesforce, FaShoppingBag, FaTag, FaTags } from 'react-icons/fa'
import Carousel from '../components/carousel/carousel'
import Timer from '../components/timer/timer'
import Card from '../components/card/card'
import ModalComp from '../components/modal/modal'
import { useState } from 'react'

export default function Home() {

  const products = [
    { image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-03.png", title: "Product", price: 10.87 },
    { image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-03.png", title: "Product", price: 10.87 },
    { image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-03.png", title: "Product", price: 10.87 },
    { image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-03.png", title: "Product", price: 10.87 },
    { image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-03.png", title: "Product", price: 10.87 },
    { image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-03.png", title: "Product", price: 10.87 },
    { image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-03.png", title: "Product", price: 10.87 },
    { image: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-03.png", title: "Product", price: 10.87 },
  ]
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {/* hero section */}
      <section className={styles.hero_section_wrapper}>
        <div className={styles.hero_section_container}>
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <div className={styles.hero_title_wrapper}>
                  <div>
                    <span className={styles.fire_icon_circle}>
                      <FaFire />
                    </span>
                    <p className={styles.deals_title}>Hot Deal In This Week</p>
                  </div>
                  <h1>Roco Wireless Headphone</h1>
                  <Button
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="200px"
                    height="60px"
                    backgroundColor="white"
                    color="black"
                    borderRadius="10px"
                    fontWeight="700"
                    boxShadow="0 2px 10px 0 rgb(0 0 0 / 10%)"
                  >
                    <BsCart style={{ marginRight: "10px" }} />
                    Shop now
                  </Button>
                </div>
              </Col>
              <Col md={6}>
                <img className='img-fluid' src='https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-38.png' />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className={styles.categories_section_wrapper}>
        <Container>
          <div className={styles.categories_title_wrapper}>
            <span className={styles.tag_icon_circle}>
              <FaTags />
            </span>
            <p className={styles.categories_title}>Categories</p>
          </div>
          <h1>Browse by Category</h1>
          <Carousel />
        </Container>
      </section>
      <section className={styles.sale_section_wrapper}>
        <Container>
          <div style={{ backgroundColor: "#F6F7FB", padding: "30px 80px" }}>
            <Row className="align-items-center">
              <Col md={6}>
                <div className={styles.sale_title_wrapper}>
                  <span className={styles.headphone_icon_circle}>
                    <FaHeadphones />
                  </span>
                  <p className={styles.sale_title}>Don’t Miss!!</p>
                </div>
                <h1>Enhance Your Music Experience</h1>
                <Timer />
                <Button
                  width="200px"
                  height="60px"
                  backgroundColor="#FF497C"
                  color="white"
                  borderRadius="6px"
                  fontWeight="700"
                >
                  Shop now
                </Button>
              </Col>
              <Col md={6}>
                <img src='https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-03.png' className='img-fluid' />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className={styles.products_section_wrapper}>
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <div className={styles.products_title_wrapper}>
                <span className={styles.bag_icon_circle}>
                  <FaShoppingBag />
                </span>
                <p className={styles.products_title}>Our Products</p>
              </div>
              <h1>Explore our Products</h1>
            </Col>
          </Row>
          <Row className="align-items-center mt-4">
            {products.map((item, index) => {
              return (
                <Col md={3}>
                  <Card className="products_card">
                    <div className="figure">
                      <a href="https://www.example.com/">
                        <img
                          className="Sirv image-main"
                          src="https://static-01.daraz.pk/p/fd7e4ccdd08f089b0a9f55ca53eed1fe.jpg"
                        />
                        <img
                          className="Sirv image-hover"
                          src="https://pakistanstore.pk/wp-content/uploads/2022/09/PS4-Dualshock-Wireless-Game-Controller.jpg"
                        />
                      </a>
                    </div>
                    <div className="title-price-container">
                      <p>{item.title}</p>
                      <h5>$ {item.price}</h5>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", margin: "20px 0" }}>
                      <div className="eye-icon-container" onClick={() => setModalShow(true)}>
                        <FaEye />
                      </div>
                      <Button width="140px" height="40px" backgroundColor="#FF497C" color="white" borderRadius="6px" fontWeight="700">Add To Cart</Button>
                      <div className="heart-icon-container">
                        <FaHeart />
                      </div>
                    </div>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
        <ModalComp show={modalShow} onHide={() => setModalShow(false)} title="This is title" body="This is body" />
      </section>
    </>
  )
}