import React from "react";
import "./Login.css";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import logo from "../../images/logo2.png";
import { BsColumnsGap } from "react-icons/bs";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);
  const onSubmit = (data) => console.log(data);
  return (
    <div className='login'>
      <Container>
        <div className='login-area'>
          <img src={logo} alt='' />
          <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: true })}
              placeholder='Name'
            />
            {errors.name && <span>Name is required</span>}

            <input
              {...register("email", { required: true })}
              placeholder='Email'
            />
            {errors.email && <span>Email is required</span>}
            <input
              {...register("password", { required: true })}
              placeholder='Password'
            />
            {errors.password && <span>Password is required</span>}
            <input
              {...register("confirmPassword", { required: true })}
              placeholder='Confirm Password'
            />
            {errors.confirmPassword && <span>Password is required</span>}

            <input type='submit' />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
