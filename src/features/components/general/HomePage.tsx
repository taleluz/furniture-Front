import Carousel from 'react-bootstrap/Carousel';
import sofa from "../../../images/Posted_Images/34-gray-couch-living-room-ideas-inc_-photos-2_optimized_1.jpg"
import table from "../../../images/Posted_Images/coffee-table-boxer-set-of-2---industrial-design-2_optimized.jpg"
import closet from "../../../images/Posted_Images/home-decor-wooden-cupboard-design-ideas---gn-ideas-2_optimized.jpg"
import "../../../styles/homepage.css"
import tAble from "../../../images/Posted_Images/screenshot_1_optimized.png"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Row } from 'react-bootstrap';
function HomePage() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sofa} width={200} height={600}
            alt="First slide"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={tAble} width={200} height={600}
            alt="Second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={closet} width={200} height={600}
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>


      </Carousel>
      <div className="product-categories__img-wrap">
      <Row>
  <a href="/category/Sofas">
    <Col xs={10} md={6}>
      <div className="product-categories__img-name-wrap" >
        <Image src="https://www.kaza.co.il/wp-content/uploads/2020/08/home_icon_product2.jpg" roundedCircle />
        <h2 ></h2>
      </div>
    </Col>
  </a>
</Row>


        <Row>

          <a href="/category/Chairs">
            <Col xs={10} md={6}>
              <Image src="https://www.kaza.co.il/wp-content/uploads/2020/08/home_icon_product4.jpg" roundedCircle />
            </Col>
            {/* <img
              className="product-categories__img"
              src="https://www.kaza.co.il/wp-content/uploads/2020/08/home_icon_product4.jpg"
              alt="chairs"
              width="200"
              height="150"
            /> */}
          </a>
          <h3></h3>
        </Row>
        <Row>

          <a href="/category/Tables">
          <Col xs={10} md={10}>
              <Image src="https://www.kaza.co.il/wp-content/uploads/2020/08/home_icon_product18.jpg" roundedCircle />
            </Col>
{/*             
            <img
              className="product-categories__img"
              src="https://www.kaza.co.il/wp-content/uploads/2020/08/home_icon_product18.jpg"
              alt="tables"
              width="200"
              height="150"
            /> */}
          </a>
          <h3><center></center></h3>
        </Row>
        <Row>

          <a href="/category/Closets">
            <Col>
              <Image src="https://valentino.co.il/wp-content/uploads/2020/02/HR2320-CLOSED-300DPI_-scaled-e1592210401259-916x1024.jpg" width={140} height={200} roundedCircle />
            </Col>
            {/* <img
              className="product-categories__img"
              src="https://valentino.co.il/wp-content/uploads/2020/02/HR2320-CLOSED-300DPI_-scaled-e1592210401259-916x1024.jpg"
              alt="closets"
              width="200"
              height="200"
            /> */}
          </a>
          <h3><center></center></h3>
        </Row>
      </div>
      </div>
  );
}

export default HomePage;