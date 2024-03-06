'use client'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm, FormProvider as Form } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { maxLength } from '../../contacts'
import { hideModal } from '../../redux/actions/modal'
import { addTodo } from '../../redux/actions/todo'

import { TextField } from '../common/text-field'
import { Button } from '../common/button'
import { CheckBox } from '../common/check-box'

export const NewTodoForm = () => {
  const [loading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  const validationSchema = Yup.object({
    label: Yup.string()
      .required('Todo is required')
      .max(maxLength, `Label must be at most ${maxLength} characters`),
    done: Yup.boolean(),
  })

  const initialValues = {
    label: '',
    done: false,
  }

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
  })

  const {
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = methods

  const values = watch()

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true)
    const { label, done } = data
    try {
      dispatch(addTodo(label, done))
    } catch (error) {
      console.error(error)
    } finally {
      reset()
      dispatch(hideModal())
      setIsLoading(false)
    }
  })

  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>
        <TextField
          id="label"
          type="text"
          value={values.label}
          onChange={(event) => setValue('label', event.target.value)}
          placeholder="Todo"
        />
        <CheckBox
          id="done"
          done={values.done}
          onClick={() => setValue('done', !values.done)}
          label="Already done!"
        />
        <div className="mt-10">
          <Button
            type="submit"
            label="ADD TODO"
            loading={isSubmitting && loading}
          />
        </div>
      </form>
    </Form>
  )
}
