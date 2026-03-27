
export default function AddContact() {
  return (
    <div className="bg-white min-h-screen flex flex-col  items-center">
      <h1 className="text-2xl font-bold mb-4 mt-24">Add Contact Page</h1>
      {/* <p className="text-gray-700">This is where you can add a new contact.</p> */}

      <form action="/addedContact" className="mt-10" >
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
          <input type="text" required id="firstName" name="firstName" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
          <input type="text" required id="lastName" name="lastName" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input type="email" required id="email" name="email" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
          <input type="tel" id="phone" name="phone" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration=300">
          Add Contact
        </button>
      </form>
    </div>
  )
}
