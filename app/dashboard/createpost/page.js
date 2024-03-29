import ProductForm from '@/components/ProductForm'
import React from 'react'

const CreatePost = () => {
  return (
    <div className='h-100 w-full mt-12 px-10 py-12 bg-white'>
      <h1 className='text-xl'>Add new Post</h1>
      <ProductForm />
    </div>
    
  )
}

export default CreatePost