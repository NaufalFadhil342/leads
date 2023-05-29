import React from 'react';
import '../Styles/form.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './Contact/schema';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="header">
        <h1>Lengkapi form di bawah ini</h1>
        <div className="line" />
      </div>
      <div className="formBody">
        <div className="name">
          <label htmlFor="name">Nama</label>
          <input id="name" {...register('name')} />
          <p>{errors.name?.message}</p>
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>
        <div className="comment">
          <label htmlFor="comment">Pesan</label>
          <textarea id="comment" {...register('comment')} />
          <p>{errors.comment?.message}</p>
        </div>
        <div className="submit">
          <input type="submit" />
        </div>
      </div>
    </form>
  );
};
