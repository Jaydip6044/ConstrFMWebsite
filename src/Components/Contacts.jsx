import React from 'react'

function Contacts() {

  const handleSubmit=(e)=>{
      e.preventDefault();
  }

  return (
    <>
        
<section className="py-12 px-6">
  <h1 className="text-blue-900 text-4xl sm:text-6xl font-bold text-center">
    Contacts
    <span className="block w-24 h-1 bg-amber-500 mx-auto mt-2"></span>
  </h1>
  <div className="flex flex-col lg:flex-row items-center gap-10 mt-8">
    <iframe
      className="w-full lg:w-[600px] h-[400px] border-none rounded-lg shadow-md"
      src="https://www.google.com/maps/embed?..."
      allowFullScreen
      loading="lazy"
    ></iframe>
    <div className="w-full lg:w-[600px]">
      <h2 className="text-3xl font-bold mb-3">Inquiries</h2>
      <p className="text-md mb-5">
        For any inquiries, questions or commendations, please call: 123-456-7890 or fill out the form below.
      </p>
      <form className="flex flex-col gap-4">
        <input required className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" type="text" placeholder="First Name" />
        <input required className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" type="text" placeholder="Last Name" />
        <input required className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" type="email" placeholder="Email" />
        <textarea required className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Message" rows="4"></textarea>
        <button onSubmit={handleSubmit} className="text-white bg-blue-600 hover:bg-blue-700 transition-all p-3 rounded-lg font-semibold">Submit</button>
      </form>
    </div>
  </div>
</section>

<section className="bg-gray-700 text-white py-12 px-6 text-center">
  <h2 className="text-3xl font-bold mb-3">Head Office</h2>
  <p className="text-md mb-3">500 Terry Francine Street, San Francisco, CA 94158</p>
  <p className="text-md mb-3">info@mysite.com | Tel: 123-456-7890 | Fax: 123-456-7890</p>
  <h2 className="text-3xl font-bold mt-8">Employment</h2>
  <p className="text-md mt-3">To apply for a job with Sphere Constructions, send a cover letter and C.V. to info@mysite.com</p>
  <h2 className="text-3xl font-bold mt-8">Get a Quote: 123-456-7890</h2>
</section>
    </>
  )
}

export default Contacts
