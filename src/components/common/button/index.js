import React from 'react'
import { PulseLoader } from 'react-spinners'
import cn from 'classnames'

export const Button = ({
  type = 'button',
  label,
  onClick,
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'hover:bg-secondary-color-dark',
        'flex w-full p-[10px] justify-center items-center bg-primary border-primary cursor-pointer text-white text-xl font-[400] rounded-[16px] transition-all duration-300 ease-in border border-transparent shadow-md h-[56px] active:border-[3px] active:border-[#fff]',
      )}
    >
      {loading ? <PulseLoader color="#fff" /> : label}
    </button>
  )
}
