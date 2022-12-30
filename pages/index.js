import { Col, Container, Row } from 'react-bootstrap'
import Button from '../components/button/button'
import styles from '../styles/Home.module.css'
import { BsCart } from 'react-icons/bs'
import { FaFire, FaHeadphones, FaSalesforce, FaTag, FaTags } from 'react-icons/fa'
import Carousel from '../components/carousel/carousel'
import Timer from '../components/timer/timer'

export default function Home() {
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
    </>
  )
}