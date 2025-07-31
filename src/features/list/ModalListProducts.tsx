import React, { useState } from "react"
import { Button, Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { addProduct, updateFormField, resetForm } from "../list/productsSlice"
import { v4 as uuidv4 } from "uuid"

const ModalListProducts: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const dispatch = useDispatch()
  const form = useSelector((state: RootState) => state.products.form)

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch(updateFormField({ field: field as any, value: e.target.value }))
    }

  const handleOk = () => {
    if (
      !form.name ||
      !form.count ||
      !form.width ||
      !form.height ||
      !form.weight
    ) {
      alert("Please, fill all cells.")
      return
    }

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
    setIsModalOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Product
      </Button>

      <Modal
        title="Add Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <input
            value={form.name}
            onChange={handleChange("name")}
            placeholder="Name *"
          />
          <input
            value={form.count}
            onChange={handleChange("count")}
            placeholder="Count *"
            type="number"
          />
          <input
            value={form.width}
            onChange={handleChange("width")}
            placeholder="Width *"
            type="number"
          />
          <input
            value={form.height}
            onChange={handleChange("height")}
            placeholder="Height *"
            type="number"
          />
          <input
            value={form.weight}
            onChange={handleChange("weight")}
            placeholder="Weight *"
            type="number"
          />
          <textarea
            value={form.comments}
            onChange={handleChange("comments")}
            placeholder="Comments"
          />
        </div>
      </Modal>
    </>
  )
}

export default ModalListProducts
