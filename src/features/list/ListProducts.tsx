import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import React from "react"
import { Divider, List } from "antd"

const ListProducts: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.list)
  return (
    <>
      <Divider orientation="left">Products List</Divider>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={products}
        renderItem={item => (
          <List.Item key={item.id}>
            {item.imageUrl}
            {item.name}
            {item.count}
            {item.size.width}
            {item.size.height}
            {item.weight}
            {item.comments}
          </List.Item>
        )}
      />
    </>
  )
}

export default ListProducts
