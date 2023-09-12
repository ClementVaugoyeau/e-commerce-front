import React from 'react'
import {ErrorMessage, useField } from 'formik'

export const TextFiled = ({label, ...props}) => {
    const [field, meta] = useField(props)
    const hasError = meta.touched && meta.error;
  return (
    <div className=' items-center justify-between'>
        <label className='block text-sm font-medium leading-6 text-gray-900  ' htmlFor={field.name}>{label}
        <input className=  {`w-full border-2 rounded ${hasError ? 'border-red-500' : ''}`}
        {...field} {...props}
        autoComplete='off' />
        <ErrorMessage render={msg => <div className=' flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1'>{msg}</div>}  name={field.name} />
         
       
        </label>
    </div>
  )
}
