// import React from "react"
// import { Button, Flex } from "antd"

// interface PrimaryButtonProps {
//   value: string
// }

// const PrimaryButton: React.FC<PrimaryButtonProps> = ({ value }) => (
//   <Flex gap="small" wrap>
//     <Button type="primary">{value}</Button>
//   </Flex>
// )

// export default PrimaryButton

// components/AddProductButton.tsx
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../list/productsSlice"
import { v4 as uuidv4 } from "uuid"

export const AddProductButton = () => {
  const dispatch = useDispatch()
  const [isModalOpen, setModalOpen] = useState(false)
  const [name, setName] = useState("")
  const [price, setPrice] = useState<number | "">("")
  const [description, setDescription] = useState("")

  const handleSubmit = () => {
    if (!name || price === "" || !description) return

    dispatch(
      addProduct({
        id: uuidv4(),
        name,
        price: Number(price),
        description,
      }),
    )

   
    setName("")
    setPrice("")
    setDescription("")
    setModalOpen(false)
  }

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Add Product</button>

      {isModalOpen && (
        <div className="modal">
          <h2>Add New Product</h2>
          <input
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="Price"
            type="number"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
          />
          <input
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <button onClick={handleSubmit}>Confirm</button>
          <button onClick={() => setModalOpen(false)}>Cancel</button>
        </div>
      )}
    </>
  )
}
