import React from 'react'
import './services.css'
import { GiCheckMark } from 'react-icons/gi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Design and development of web interfaces.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Analysis of statistics and user behavior.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Collection of information about the project.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Creating layouts and prototypes.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Creating effective, convenient solutions.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Work on the graphical part of the interface.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Drawing elements.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
          <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Company website.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Business card site.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Landing Page.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Personal.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Catalog.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Internet-shop.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
          <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Brand and competitor analysis.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Idea brainstorming.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Content creation.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Editing and approvals.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon'/>
              <p>Promotion.</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services