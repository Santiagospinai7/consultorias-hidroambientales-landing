import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const [showForm, setShowForm] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 767 })

  useEffect(() => {
    const closeForm = () => setShowForm(false)
    window.addEventListener('click', closeForm)

    return () => {
      window.removeEventListener('click', closeForm)
    }
  }, [])

  const handleButtonClick = (e) => {
    if (isMobile) {
      window.open('https://wa.me/573136136848?text=Hello%20from%20your%20website!', '_blank')
    } else {
      e.stopPropagation() 
      setShowForm((prev) => !prev)
    }
  }
  

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setShowForm(false)
  }

  return (
    <div className="fixed right-0 bottom-0 p-6 z-10 sm:p-10">
      <button
        className="duration-500 p-3 rounded-full text-white bg-green-500 hover:bg-green-700"
        onClick={handleButtonClick}
      >
        <FaWhatsapp size={24} />
      </button>

      {isMobile || !showForm ? null : (
        <div className="fixed bottom-16 left-2/4 transform -translate-x-full p-4 bg-white shadow-lg rounded-md w-72">
          <form onSubmit={handleFormSubmit} className="w-full max-w-sm">
            <label htmlFor="message" className="block mb-2 text-gray-700">
              <p className="text-lg font-semi mb-4">👋 Hola, ¿En que te podemos ayudar?</p>
            </label>
            {/* put itext input and button here align in the same line */}
            <textarea
              id="message"
              name="message"
              className="w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              placeholder="Hola, quisiera saber si tienen disponibilidad para..."
              required
            />
            <button
              type="submit"
              className="w-full px-3 py-4 mt-4 text-white bg-green-500 rounded-md focus:bg-green-600 focus:outline-none"
            >
              Enviar
            </button>
          </form>
        </div>
      
      )}

    </div>
  )
}

export default WhatsAppButton
