import React from "react"
import { Flex, Layout } from "antd"
import ListProducts from "./features/list/ListProducts"
import ModalListProducts from "./features/list/ModalListProducts"
import ModalRemove from "./features/list/ModalRemove"

const { Header, Footer, Content } = Layout

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
}

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "24px",
  backgroundColor: "#0958d9",
  color: "#fff",
  flex: 1,
  overflowY: "auto",
}

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
}

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
  height: "100vh",
}

const buttonStyle = {
  display: "flex",
  justifyContent: "center",
}

const App: React.FC = () => (
  <Flex gap="middle" wrap>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Product List Web App</Header>
      <Content style={contentStyle}>
        <div style={buttonStyle}>
          <ModalListProducts />
          <ModalRemove />
        </div>
        <ListProducts />
      </Content>
      <Footer style={footerStyle}>by @oleh__selin</Footer>
    </Layout>
  </Flex>
)

export default App
