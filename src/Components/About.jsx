import React from 'react'

export default function About() {
  return (
    <section id="about">
      <div>
        <div className="three columns">
          <img className="profile-pic" src="" alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{}</p>

          <div>
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{}</span>
                <br />
                <span>{}</span>
                <br />
                <span>{}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
