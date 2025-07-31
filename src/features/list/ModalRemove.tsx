import React, { useState } from "react"
import { Button, Modal } from "antd"

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { removeProduct } from "../list/productsSlice"

const ModalRemove: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const dispatch = useDispatch()
  const productList = useSelector((state: RootState) => state.products.list)

  const handleDelete = (id: string) => {
    dispatch(removeProduct(id))
  }

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Delete Products
      </Button>
      <Modal
        title="Delete Products:"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {productList.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <ul>
            {productList.map(product => (
              <li key={product.id}>
                {product.name} — {product.count} pieces.
                <button onClick={() => handleDelete(product.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </>
  )
}

export default ModalRemove
