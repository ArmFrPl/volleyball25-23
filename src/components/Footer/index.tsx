import {Row, Col, Image} from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify={"space-evenly"}>
            <Col lg={8} md={8} sm={12} xs={10}>
              <Language>{t("Contact")}</Language>
              <Para style={{whiteSpace: "pre-wrap"}}>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="https://t.me/Katyha_velichko">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={5} md={6} sm={6} xs={6}>
              <Title>{t("Policy")}</Title>
              <Large to="/agreement" left="true" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
                {t("Agreement")}
              </Large>
            </Col>
            <Col lg={5} md={6} sm={6} xs={6}>
              <Language>{t("Address")}</Language>
              <Para>{t("AddressStr")}</Para>
              <Para>{t("AddressCountry")}</Para>
            </Col>
            <Col lg={3} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang" style={{marginBottom: '10px'}}>{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => {
                  handleChange("en")
                  window.scrollTo({top: 0, behavior: "smooth"})
                }}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="25px"
                    height="25px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => {
                  handleChange("ru")
                  window.scrollTo({top: 0, behavior: "smooth"})
                }}>
                  <SvgIcon
                    src="russia.svg"
                    aria-label="homepage"
                    width="25px"
                    height="25px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer style={{alignItems:"center"}}>
                <Image
                  preview={false}
                  src="img/images/logo.png"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                  onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                />
                <Image
                  preview={false}
                  src="img/images/logoAs.png"
                  aria-label="homepage"
                  width="250px"
                  style={{marginLeft: "20px"}}
                  onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://instagram.com/volleyball25_23?igshid=OGQ5ZDc2ODk2ZA=="
                src="instagram.svg"
              />
              <SocialLink
                href="https://www.tiktok.com/@volleyball25_23?_t=8h3BCRGt4pq&_r=1"
                src="tiktok.svg"
              />
              <SocialLink
                  href="https://www.facebook.com/profile.php?id=100072351273080&mibextid=LQQJ4d"
                  src="facebook.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
