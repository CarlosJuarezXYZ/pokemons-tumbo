import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {  Modal } from "antd";
import * as yup from "yup";
import { FormStyled } from "./Form.styled";

const schema = yup.object().shape({
  id: yup.string().required("ID is required"),
  name: yup.string().required("Name is required"),
  type: yup.string().required("Type is required"),
  size: yup.string().required("Size is required"),
  gender: yup.string().required("Gender is required"),
  imageUrl: yup
    .string()
    .url("Must be a valid URL")
    .required("Image URL is required"),
});

const { FormPokemon, FormGroup, FormButtons } = FormStyled;

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancelModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data: any) => {
    localStorage.setItem("pokemonFormData", JSON.stringify(data));
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    reset({
      id: "",
      name: "",
      type: "",
      size: "",
      gender: "",
      imageUrl: "",
    });
  };

  return (
    <FormPokemon onSubmit={handleSubmit(onSubmit)} className="pokemon-form">
      <FormGroup>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register("id")} />
        {errors.id && <p>{errors.id.message}</p>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="type">Tipo:</label>
        <input type="text" id="type" {...register("type")} />
        {errors.type && <p>{errors.type.message}</p>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="size">Tamaño:</label>
        <input type="text" id="size" {...register("size")} />
        {errors.size && <p>{errors.size.message}</p>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="gender">Género:</label>
        <input type="text" id="gender" {...register("gender")} />
        {errors.gender && <p>{errors.gender.message}</p>}
      </FormGroup>
      <FormGroup>
        <label htmlFor="imageUrl">Image URL:</label>
        <input type="text" id="imageUrl" {...register("imageUrl")} />
        {errors.imageUrl && <p>{errors.imageUrl.message}</p>}
      </FormGroup>
      <FormButtons>
        <button type="button" onClick={handleCancel}>
          Cancelar
        </button>
        <button type="submit">Guardar</button>
      </FormButtons>
      <Modal
        title='Pokemon Saved'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancelModal}
      >
    </Modal>
    </FormPokemon>
  );
};

export default Form;
