import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'
import {FaAngleRight} from 'react-icons/fa'


const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story">our story</Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="text-muted mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, earum?</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <h3 className="text-center my-4 text-uppercase">heading1</h3>
            <div className="card p-3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum soluta dignissimos odio neque tenetur dolore voluptatibus nulla, excepturi tempore, quis corrupti accusamus obcaecati alias!</p>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className="text-center my-4 text-uppercase">heading2</h3>
            <div className="card p-3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum soluta dignissimos odio neque tenetur dolore voluptatibus nulla, excepturi tempore, quis corrupti accusamus obcaecati alias!</p>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className="text-center my-4 text-uppercase">heading3</h3>
            <div className="card p-3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum soluta dignissimos odio neque tenetur dolore voluptatibus nulla, excepturi tempore, quis corrupti accusamus obcaecati alias!</p>
            </div>
          </div>
        </div>

        <div className="col-10 col-sm-8 mx-auto text-center">
          <Link to="/about/">
            <button className="btn text-uppercase btn-yellow my-5">
              about page <FaAngleRight />
            </button>
          </Link>
        </div>
        
      </div>
    </section>
  )
}

export default Info
