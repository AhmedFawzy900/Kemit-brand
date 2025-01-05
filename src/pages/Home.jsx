import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/Header";
import icon_img from "../../public/logo.png";
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
        <Header />
        hallo
    </>
  );
};

export default Home;