import React from "react"
import { Divider, List, Typography } from "antd"

const data: any[] | undefined = []

const ListProducts: React.FC = () => (
  <>
    <Divider orientation="left">Products List View</Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
  </>
)

export default ListProducts
