import {lazy} from "react";
import { withTranslation } from "react-i18next";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import MiddleBlock from "../../components/MiddleBlock";


const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = ({ t }: any) => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={t("IntroTitle")}
        content={t("IntroText")}
        button={IntroContent.button}
        icon="img/images/img2.jpeg"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={t("AboutTitle")}
        content={t("AboutText")}
        icon="img/images/img3.jpeg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={t("MissionTitle")}
        content={t("MissionText")}
        icon="img/images/img1.jpeg"
        id="mission"
      />
      <ContentBlock
        type="rightN"
        title={t("ContactTitle")}
        content={t("ContactText")}
        button={ContactContent.button}
        id="contact"
      />
    </Container>
  );
};

export default withTranslation()(Home);
