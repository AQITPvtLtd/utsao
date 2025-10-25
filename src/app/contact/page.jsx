import React from 'react'
import ContactUs from './Contact'

const page = () => {
    return (
        <div>
            <ContactUs />
            <div className="grid grid-cols-1 lg:grid-cols-12 py-6">
                <div className="col-span-12 lg:col-start-2 lg:col-span-10 px-4 lg:px-0">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9724971229334!2d77.21961267549854!3d28.570588575698597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce39d936b3e73%3A0x7322566a7104ffd3!2sUtsao%20-%20Corporate%20%26%20Business%20Gifts!5e0!3m2!1sen!2sin!4v1760085286730!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            className="rounded-xl"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page