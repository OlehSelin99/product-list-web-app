import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../list/productsSlice"
import { v4 as uuidv4 } from "uuid"

export const AddProductButton = () => {
  const dispatch = useDispatch()
  const [isModalOpen, setModalOpen] = useState(false)
  const [name, setName] = useState("")
  const [size, setSize] = useState("")
  const [count, setCount] = useState<number | "">("")
  const [weight, setWeight] = useState("")
  // const [description, setDescription] = useState("")

  const handleSubmit = () => {
    // if (!name || price === "" || !description) return

    dispatch(
      addProduct({
        id: uuidv4(),
        name,
        count: Number(count),
        size: {
          width: Number(size),
          height: Number(size),
        },
        weight,
      }),
    )

    setName("")
    setCount("")
    // setDescription("")
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
            placeholder="Image"
            type="url"
            value={count}
            onChange={e => setCount(Number(e.target.value))}
          />
          <input
            placeholder="Suze"
            value={size}
            onChange={e => setSize(e.target.value)}
          />
          <input
            placeholder="Weight"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />

          <button onClick={handleSubmit}>Confirm</button>
          <button onClick={() => setModalOpen(false)}>Cancel</button>
        </div>
      )}
    </>
  )
}
