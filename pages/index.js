import { Col, Container, Row } from 'react-bootstrap'
import Button from '../components/button/button'
import styles from '../styles/Home.module.css'
import { BsCart } from 'react-icons/bs'
import { FaEye, FaFire, FaGamepad, FaHeadphones, FaHeart, FaSalesforce, FaShoppingBag, FaTag, FaTags } from 'react-icons/fa'
import { MultipleItems, FadeSlider } from '../components/carousel/carousel'
import Timer from '../components/timer/timer'
import Card from '../components/card/card'
import ModalComp from '../components/modal/modal'
import sale from '../assets/man.svg'
import { useEffect, useState } from 'react'
import products from '../data.json'

export default function Home() {

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
                {/* <img className='img-fluid img-1' src='https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png' /> */}
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
          <MultipleItems />
        </Container>
      </section>
      <section className={styles.sale_section_wrapper}>
        <Container>
          <div style={{ backgroundColor: "#F6F7FB", padding: "30px 80px" }}>
            <Row className="align-items-center">
              <Col md={6}>
                <div className={styles.sale_title_wrapper}>
                  <span className={styles.headphone_icon_circle}>
                    <FaGamepad />
                  </span>
                  <p className={styles.sale_title}>Don’t Miss!!</p>
                </div>
                <h1>Enhance Your Gaming Experience</h1>
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
                <div id="wifi-loader">
                  <svg className="circle-outer" viewBox="0 0 86 86">
                    <circle className="back" cx="43" cy="43" r="40"></circle>
                    <circle className="front" cx="43" cy="43" r="40"></circle>
                    <circle className="new" cx="43" cy="43" r="40"></circle>
                  </svg>
                  <svg className="circle-middle" viewBox="0 0 60 60">
                    <circle className="back" cx="30" cy="30" r="27"></circle>
                    <circle className="front" cx="30" cy="30" r="27"></circle>
                  </svg>
                  <svg className="circle-inner" viewBox="0 0 34 34">
                    <circle className="back" cx="17" cy="17" r="14"></circle>
                    <circle className="front" cx="17" cy="17" r="14"></circle>
                  </svg>
                </div>
                <div>
                <img src='https://cdn.shopify.com/s/files/1/0636/8837/6542/products/049-024-WH_XBX_AfterglowWave_BLACK_ECOM-FRONT.Camera1_f45bec4e-98c2-45d9-94bd-9d593586d68a.png?v=1664391713' className='img-fluid' />
                </div>
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
                    <img src={item.image} alt="" />
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
      <section className={styles.sale_section_wrapper}>
        <Container>
          <Row className="align-items-center">
            <Col md={12} lg={12}>
              <img width={500} src={sale.src} alt='' />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}