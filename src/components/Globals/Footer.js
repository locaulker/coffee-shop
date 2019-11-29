import React from 'react'

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 text-left  text-capitalize">
            <p>all rights reserved &copy; my gourmet coffee shop &ndash; {new Date().getFullYear().toString()}</p>
          </div>

          <div className="col-10 col-md-6 text-right">
            <p><em>by</em>&nbsp;&nbsp;<span>DYMETRIX</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
