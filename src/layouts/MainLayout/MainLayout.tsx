import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import { Header, Footer } from "@components/common";

import styles from "./styles.module.css";
const { container, wrapper } = styles;

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>{children}</div>
      <Footer />
    </Container>
  );
}

export default MainLayout;
