import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div>
            <h2>Welcome to the Contact Page</h2>
            <div className="form">
                <input type="text" placeholder="Enter Name"/>
                <input type="text" placeholder="Enter Last Name"/>
                <input type="email" placeholder="Enter Email"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Enter a Message..."></textarea>
                <button class="btn-submit">Submit</button>
            </div>
             
        </div>
    )
}
