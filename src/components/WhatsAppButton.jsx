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
        className="duration-500 p-3 rounded-full text-white bg-indigo-600 hover:bg-indigo-700"
        onClick={handleButtonClick}
      >
        <FaWhatsapp size={24} />
      </button>

      {isMobile || !showForm ? null : (
        <div className="fixed bottom-16 left-2/4 transform -translate-x-2/4 p-4 bg-white shadow-lg rounded-md">
          <form onSubmit={handleFormSubmit} className="w-full max-w-sm">
            <label htmlFor="message" className="block mb-2 text-gray-700">
        Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              rows="3"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-300"
            >
        Send
            </button>
          </form>
        </div>
      )}

    </div>
  )
}

export default WhatsAppButton
