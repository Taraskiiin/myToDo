/* eslint-disable react/prop-types */
import React from 'react'
import checkboxCheckedIcon from '../../../assets/checkbox-checked.svg'
import checkboxUncheckedIcon from '../../../assets/checkbox-unchecked.svg'

export const CheckBox = ({ label, done, onClick }) => {
  return (
    <div onClick={onClick} className="flex gap-3 cursor-pointer">
      <img
        src={done ? checkboxCheckedIcon : checkboxUncheckedIcon}
        alt={done ? 'checked done box' : 'unchecked done box'}
        className="w-5"
      />
      <p className="capitalize">{label}</p>
    </div>
  )
}
