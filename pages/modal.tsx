import React from 'react'
import ReactDom from 'react-dom'
// import { PositionProperty } from 'csstype'

interface ModalProps {
  open: boolean
  children: React.ReactNode
  onClose: () => void
}

export default function Modal({ open, children, onClose }: ModalProps) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modal-container">
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById('portal') as HTMLElement
  )
}
