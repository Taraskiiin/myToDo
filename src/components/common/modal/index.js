import React from 'react'
import { useDispatch } from 'react-redux'
import { hideModal } from '../../../redux/actions/modal'

import closeIcon from '../../../assets/close.svg'

// eslint-disable-next-line react/prop-types
export const Modal = ({ children }) => {
  const dispatch = useDispatch()
  const onClose = () => dispatch(hideModal())
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
      overflow-x-hidden overflow-y-auto outline-none"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div
        className="relative bg-white p-6 max-w-md
        mx-auto rounded shadow-md pt-20"
      >
        <span
          className="absolute top-0 right-0 p-4 cursor-pointer"
          onClick={onClose}
        >
          <img src={closeIcon} alt="close button" className="w-10" />
        </span>
        {children}
      </div>
    </div>
  )
}
