import React from "react"
import { Flex, Layout } from "antd"
import ListProducts from "./features/list/ListProducts"

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

const App: React.FC = () => (
  <Flex gap="middle" wrap>
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Product List Web App</Header>
      <Content style={contentStyle}>
        <ListProducts />
      </Content>
      <Footer style={footerStyle}>by @oleh__selin</Footer>
    </Layout>
  </Flex>
)

export default App
