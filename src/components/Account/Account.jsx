import logocartIcon from "../header/logo-cart.png";
import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import MenuSignUp from "../MenuSignUp/MenuSignUp";

const Account = () => {
  
  const account = true

  return (
    <div className="flex min-h-full flex-col  justify-center px-6 py-12 lg:px-8">
      <MenuSignUp page={account} />

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900">
                Adresse email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                 
                  required
                  className="w-full border"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlfor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Mot de passe
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Mot de passe oublié ?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Me connecter
              </button>
            </div>
          </form>
        </Formik>
      </div>
    </div>
  );
};

export default Account;
