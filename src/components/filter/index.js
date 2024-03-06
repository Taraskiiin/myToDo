import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { FilterItem } from '../common/filter-item'
import { setFilter } from '../../redux/actions/filter'

const filter = ['all', 'done', 'unfinished']

export const Filter = () => {
  const dispatch = useDispatch()

  const activeFilter = useSelector((state) => state.filter)

  // eslint-disable-next-line no-shadow
  const handleSetFilter = (filter) => dispatch(setFilter(filter))
  return (
    <ul className="w-fit p-10 rounded-md bg-white h-fit">
      {filter.map((label, index) => (
        <FilterItem
          key={index}
          label={label}
          active={activeFilter === label}
          onClick={() => handleSetFilter(label)}
        />
      ))}
    </ul>
  )
}
