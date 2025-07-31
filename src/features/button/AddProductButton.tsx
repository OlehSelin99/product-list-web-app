import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { addProduct, updateFormField, resetForm } from "../list/productsSlice"
import { v4 as uuidv4 } from "uuid"
import { useState } from "react"

export const AddProductButton = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const dispatch = useDispatch()
  const form = useSelector((state: RootState) => state.products.form)

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch(updateFormField({ field: field as any, value: e.target.value }))
    }

  const handleSubmit = () => {
    dispatch(
      addProduct({
        id: uuidv4(),
        name: form.name,
        count: Number(form.count),
        size: {
          width: Number(form.width),
          height: Number(form.height),
          weight: Number(form.weight),
        },
        comments: form.comments,
      }),
    )

    dispatch(resetForm())
  }

  const handleDecline = () => {
    setModalOpen(false)
  }

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Add Product</button>
      {isModalOpen && (
        <div>
          <input
            value={form.name}
            onChange={handleChange("name")}
            placeholder="Name"
          />
          <input
            value={form.count}
            onChange={handleChange("count")}
            placeholder="Count"
          />
          <input
            value={form.size}
            onChange={handleChange("size")}
            placeholder="Size"
          />
          <input
            value={form.width}
            onChange={handleChange("width")}
            placeholder="Width"
          />
          <input
            value={form.height}
            onChange={handleChange("height")}
            placeholder="Height"
          />
          <input
            value={form.weight}
            onChange={handleChange("weight")}
            placeholder="Weight"
          />
          <textarea
            value={form.comments}
            onChange={handleChange("comments")}
            placeholder="Comments"
          />
          <button onClick={handleSubmit}>Confirm</button>
          <button onClick={handleDecline}>Decline</button>
        </div>
      )}
    </>
  )
}
