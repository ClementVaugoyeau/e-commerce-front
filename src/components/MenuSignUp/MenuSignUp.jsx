import logocartIcon from "../header/logo-cart.png";
import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";

const MenuSignUp = ({page}) => {
  return (
    
      <div className="sm:mx-auto sm:w-fullbg-indigo-600 sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src={logocartIcon}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Shop EZ
        </h2>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <Link to={"/my-account"}>
              <li className="mr-2">
                <div className={`inline-block p-4 ${ page ? 'text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500' : 'page border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'} `}>
                  Connexion
                </div>
              </li>
            </Link>
            <Link to={"/my-account/sign-up"}>
              <li className="mr-2">
                <div
                  className={`inline-block p-4 ${ page ? 'page border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300' : 'text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'} `}
                  aria-current="page">
                  Inscription
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      
  );
};

export default MenuSignUp;
