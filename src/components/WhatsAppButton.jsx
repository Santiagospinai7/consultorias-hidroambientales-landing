import { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const [showForm, setShowForm] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const formRef = useRef(null)

  useEffect(() => {
    const closeForm = () => setShowForm(false)
    window.addEventListener('click', closeForm)

    return () => {
      window.removeEventListener('click', closeForm)
    }
  }, [])

  const handleButtonClick = (e) => {
    if (isMobile) {
      window.open(
        'https://wa.me/573136136848?text=Hola Consultorias hidroambientales 👋!%20Quisiera%20saber%20acerca...',
        '_blank'
      )
    } else {
      e.stopPropagation()
      setShowForm((prev) => !prev)
    }
  }

  const handleFormClick = (e) => {
    e.stopPropagation() // Stop the propagation to prevent closing the form
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    window.open(`https://wa.me/573136136848?text=${e.target.message.value}`, '_blank')
    setShowForm(false)
  }

  return (
    <div className="fixed right-0 bottom-0 p-6 z-10">
      <button
        className="duration-500 p-5 rounded-full text-white bg-green-500 hover:bg-green-700"
        onClick={handleButtonClick}
      >
        <FaWhatsapp size={32} />
      </button>

      {isMobile || !showForm ? null : (
        <div
          ref={formRef}
          className="fixed bottom-20 left-2/4 transform -translate-x-full p-4 bg-white shadow-lg rounded-md w-72"
          onClick={handleFormClick}
        >
          <form onSubmit={handleFormSubmit} className="w-full max-w-sm">
            <label htmlFor="message" className="block mb-2 text-gray-700">
              <p className="text-lg font-semi mb-4">👋 Hola, ¿En que te podemos ayudar?</p>
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              placeholder="Hola, quisiera saber acerca..."
              required
            />
            <button
              type="submit"
              className="w-full px-3 py-4 mt-4 text-white duration-500 bg-green-500 hover:bg-green-700 rounded-md focus:bg-green-600 focus:outline-none"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default WhatsAppButton
