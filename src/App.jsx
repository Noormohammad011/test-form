import { useState, useRef } from 'react'

const App = () => {
  const [form, setForm] = useState({
    productName: '',
    quantity: '',
    categoryName: '',
    brand: '',
    price: '',
  })
  const productNameRef = useRef()
  const quantityRef = useRef()
  const categoryNameRef = useRef()
  const brandRef = useRef()
  const priceRef = useRef()

  const handleKeyDown = (event, inputType) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      switch (inputType) {
        case 'productName':
          quantityRef.current.focus()
          break
        case 'quantity':
          categoryNameRef.current.focus()
          break
        case 'categoryName':
          brandRef.current.focus()
          break
        case 'brand':
          priceRef.current.focus()
          break
        case 'price':
          priceRef.current.focus()
          break
        default:
          break
      }
    }
  }

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setForm({
      productName: '',
      quantity: '',
      categoryName: '',
      brand: '',
      price: '',
    })
    alert(JSON.stringify(form))
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto'
      >
        <input
          type='text'
          name='productName'
          ref={productNameRef}
          onKeyDown={(event) => handleKeyDown(event, 'productName')}
          onChange={handleChange}
          placeholder='Product Name'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        <select
          name='quantity'
          ref={quantityRef}
          onKeyDown={(event) => handleKeyDown(event, 'quantity')}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-3 leading-tight focus:outline-none focus:shadow-outline'
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <input
          type='text'
          name='categoryName'
          ref={categoryNameRef}
          onKeyDown={(event) => handleKeyDown(event, 'categoryName')}
          onChange={handleChange}
          placeholder='Category Name'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-3 leading-tight focus:outline-none focus:shadow-outline'
        />
        <input
          type='text'
          name='brand'
          ref={brandRef}
          onKeyDown={(event) => handleKeyDown(event, 'brand')}
          onChange={handleChange}
          placeholder='Brand'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-3 leading-tight focus:outline-none focus:shadow-outline'
        />
        <input
          type='text'
          name='price'
          ref={priceRef}
          onKeyDown={(event) => handleKeyDown(event, 'price')}
          onChange={handleChange}
          placeholder='Price'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-3 leading-tight focus:outline-none focus:shadow-outline'
        />
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5 w-full'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
