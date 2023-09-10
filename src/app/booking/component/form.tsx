"use client";
import React, { FormEvent } from "react";

export default function Form() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const name = formData.get("name") as string;
    const surname = formData.get("surname") as string;
    const nationalIdCard = formData.get("nationalIdCard") as string;
    const hospital = formData.get("hospital") as string;
    const vaccinationDate = formData.get("vaccinationDate") as string;

    alert(
      `Name: ${name}\nSurname: ${surname}\nNational ID Card: ${nationalIdCard}\nHospital: ${hospital}\nVaccination Date: ${vaccinationDate}`
    );
  };

  return (
    <form
      className='bg-white bg-opacity-25 p-4 rounded-lg shadow-lg'
      onSubmit={handleSubmit}
    >
      <div className='mb-4'>
        <label className='block text-white text-sm font-semibold mb-2'>
          Name
        </label>
        <input
          type='text'
          name='name'
          className='w-full bg-transparent border-b border-white focus:outline-none text-white text-base'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-white text-sm font-semibold mb-2'>
          Surname
        </label>
        <input
          type='text'
          name='surname'
          className='w-full bg-transparent border-b border-white focus:outline-none text-white text-base'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-white text-sm font-semibold mb-2'>
          National ID Card
        </label>
        <input
          type='text'
          name='nationalIdCard'
          className='w-full bg-transparent border-b border-white focus:outline-none text-white text-base'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-white text-sm font-semibold mb-2'>
          Hospital
        </label>
        <select
          name='hospital'
          className='w-full bg-transparent border-b border-white focus:outline-none text-white text-base'
        >
          <option value='Chula'>Chulalongkorn Hospital</option>
          <option value='Rajavithi'>Rajavithi Hospital</option>
          <option value='Thammasat'>Thammasat University Hospital</option>
        </select>
      </div>
      <div className='mb-4'>
        <label className='block text-white text-sm font-semibold mb-2'>
          Vaccination Date
        </label>
        <input
          type='date'
          name='vaccinationDate'
          className='w-full bg-transparent border-b border-white focus:outline-none text-white text-base'
        />
      </div>
      <div className='mb-4'>
        <button
          type='submit'
          className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
