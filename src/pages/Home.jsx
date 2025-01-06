import { Helmet, HelmetProvider } from "react-helmet-async";

import icon_img from "../../public/logo.png";
import { Container } from "react-bootstrap";
const Home = () => {
  return (
    <>
        <Helmet>
          <title>KEMITBRAND</title>
          <meta
            name="description"
            content="We create powerful brands that inspire."
          />
          <link
            rel="icon"
            type="image/ico"
            href={icon_img}
            sizes="30x30"
          />
        </Helmet>
          
        <Container>
            hallo
        </Container>
    </>
  );
};

export default Home;
