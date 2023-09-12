import logocartIcon from "../header/logo-cart.png";
import React from "react";
import { Formik, Field, Form} from "formik";
import { Link } from "react-router-dom";
import MenuSignUp from "../MenuSignUp/MenuSignUp";
import { object, string, number, date, InferType, ref, oneOf } from 'yup';
import { useFormik } from 'formik';
import { TextFiled } from "./TextFiled";

const SignUp = () => {

    const validate = object(
      {
        firstName: string().max(15, "Ne doit pas depasser 15 caractères").required("Prénom Requis"),
        lastName: string().max(20, "Ne doit pas depasser 20 caractères").required("Nom Requis"),
        email: string().email("Email invalide").required("Email requis"),
        password: string().min(6, "Mot de passe de 6 caractere").required("Requis"),
        confirmPassword: string().min(6, "Mot de passe de 6 caractere").oneOf([ref('password'), null], "Mot de passse different").required("Requis"),
      }
    )
  return (
    <div className="flex min-h-full flex-col  justify-center px-6 py-12 lg:px-8">
    <MenuSignUp/>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <Formik
    initialValues={{
      firstName: '',
      lasName: '',
      email: '',
      password: '',
      consfirmPassword: ''
    }} 
    validationSchema={validate}

    onSubmit={value => {console.log(value)}}
    >
     
      <Form className="space-y-6">
        <TextFiled label="Prénom" name="firstName" type="text"/>
        <TextFiled label="Nom" name="lastName" type="text"/>
        <TextFiled label="Email" name="email" type="email"/>
        <TextFiled label="Mot de Passe" name="password" type="password"/>
        <TextFiled label="Confirmer Mot de Passe" name="confirmPassword" type="password"/>
        <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Créer un Compte
              </button>
      </Form>
         
    </Formik>
    </div>
    </div>
  );
};

export default SignUp;
