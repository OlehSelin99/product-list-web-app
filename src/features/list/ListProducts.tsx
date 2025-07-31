import React, { useState, useMemo } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { Divider, List, Select } from "antd"

const { Option } = Select

const ListProducts: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.list)

  // State for selected sort method
  const [sortMode, setSortMode] = useState("")

  // Sort products based on selected sort mode
  const sortedProducts = useMemo(() => {
    const sorted = [...products]
    if (sortMode === "alphabetical") {
      sorted.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortMode === "count") {
      sorted.sort((a, b) => a.count - b.count)
    }
    return sorted
  }, [products, sortMode])

  return (
    <>
      <Divider orientation="center">Products List</Divider>

      {/* Dropdown to select sorting */}
      <Select
        defaultValue="alphabetical"
        onChange={(value) => setSortMode(value)}
        style={{ marginBottom: "1rem" }}
      >
        <Option value="alphabetical">Sort by Name (A–Z)</Option>
        <Option value="count">Sort by Count</Option>
      </Select>

      <List
        bordered
        dataSource={sortedProducts}
        renderItem={item => (
          <List.Item key={item.id}>
            <div>
              <div><strong>Name:</strong> {item.name}</div>
              <div><strong>Image:</strong> {item.imageUrl}</div>
              <div><strong>Count:</strong> {item.count}</div>
              <div><strong>Size:</strong> {item.size.width} x {item.size.height}</div>
              <div><strong>Weight:</strong> {item.weight}</div>
              <div><strong>Comments:</strong> {item.comments?.length || 0}</div>
            </div>
          </List.Item>
        )}
      />
    </>
  )
}

export default ListProducts
