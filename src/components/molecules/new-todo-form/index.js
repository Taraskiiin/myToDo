"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, FormProvider as Form } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextField } from "../../atoms/text-field";
import { Button } from "../../atoms/button";

export const NewTodoForm = () => {
  const [loading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    label: Yup.string().required("Todo is required"),
    done: Yup.boolean(),
  });

  const initialValues = {
    label: "",
    done: false,
  };

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialValues,
  });

  const {
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    const { label, done } = data;
    try {
      console.log({ label, done });
    } catch (error) {
      console.error(error);
    } finally {
      reset();
      setIsLoading(false);
    }
  });

  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>
        <TextField
          id="label"
          type="text"
          value={values.label}
          onChange={(event) => setValue("label", event.target.value)}
          placeholder="Todo"
        />
        <Button
          type="submit"
          label="ADD TODO"
          loading={isSubmitting && loading}
        />
      </form>
    </Form>
  );
};
