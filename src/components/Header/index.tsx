import { useState } from "react";
import { useHistory } from "react-router"
import {Row, Col, Drawer, Image} from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import {Large} from "../Footer/styles";
import {Link} from "react-router-dom";


const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);
  const history = useHistory();

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={async () => {
          if((window.location.pathname !== "/")){
            await history.push('/')
            await scrollTo("about")
          }else{scrollTo("about")}
        }}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={async () => {
          if(window.location.pathname !== "/"){
            await history.push('/')
            await scrollTo("mission")
          }else{scrollTo("mission")}
        }}>
          <Span>{t("Mission")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <Link to="/agreement">
          <Span>
            {t("Agreement")}
          </Span>
          </Link>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={async () => {
            if(window.location.pathname !== "/"){
              await history.push('/')
              await scrollTo("contact")
            }else{scrollTo("contact")}
          }}
        >
          <Span>
            <Button>{t("Register")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <Image preview={false} src="img/images/logo.png" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
