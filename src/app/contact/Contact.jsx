import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-lg border-black border-2">
                <h1
                    className="text-2xl sm:text-3xl font-bold text-center mb-8 tracking-wide dark:text-black"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                >
                    Contact Us
                </h1>

                <form className="space-y-6">
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            className="border-b-1 border-[#9b4a2d] px-1 py-2 w-full outline-none placeholder-gray-500 text-sm sm:text-base transition dark:text-black"
                            placeholder="Your Name"
                            type="text"
                            id="fullname"
                            name="fullname"
                            // value={formData.fullname}
                            // onChange={handlechange}
                            required
                        />
                        <input
                            className="border-b-1 border-[#9b4a2d] px-1 py-2 w-full outline-none placeholder-gray-500 text-sm sm:text-base transition dark:text-black"
                            placeholder="Phone Number"
                            type="tel"
                            id="phone"
                            name="phone"
                            // value={formData.phone}
                            // onChange={handlechange}
                            required
                        />
                    </div>

                    {/* Email + Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            className="border-b-1 border-[#9b4a2d] px-1 py-2 w-full outline-none placeholder-gray-500 text-sm sm:text-base transition dark:text-black"
                            placeholder="Email Address"
                            type="email"
                            id="email"
                            name="email"
                            // value={formData.email}
                            // onChange={handlechange}
                            required
                        />
                        <input
                            className="border-b-1 border-[#9b4a2d] px-1 py-2 w-full outline-none placeholder-gray-500 text-sm sm:text-base transition dark:text-black"
                            placeholder="Enter Your Location..."
                            type="text"
                            name="location"
                            id="location"
                            // value={formData.location}
                            // onChange={handlechange}
                            required
                        />
                    </div>

                    {/* Message */}
                    <textarea
                        className="border-b-1 border-[#9b4a2d] px-1 py-2 w-full outline-none placeholder-gray-500 text-sm sm:text-base transition resize-none dark:text-black"
                        placeholder="Message..."
                        rows="1"
                        id="message"
                        name="message"
                        // value={formData.message}
                        // onChange={handlechange}
                    ></textarea>

                    {/* Submit Button */}
                    {/* <div className="text-center mt-6">
                        {loading ? (
                            <div
                                className="flex justify-center items-center w-full h-full fixed top-0 left-0 z-50"
                                style={{ backgroundColor: "rgba(75, 0, 130, 0.5)" }}
                            >
                                <ClipLoader width="60" height="60" color="#eb5f30" className="animate-spin" />
                            </div>
                        ) : (
                            <button
                                className="cursor-pointer font-semibold dark:text-black text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2.5 rounded-2xl border-2 border-[#9b4a2d] transition duration-300 hover:scale-105 hover:bg-gray-300 hover:text-[#9b4a2d]"
                            >
                                Submit
                            </button>
                        )}
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default Contact