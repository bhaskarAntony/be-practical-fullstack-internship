import React from 'react'
import '../styles/follow.css'

function Follow() {
  return (
    <div className="follow container" id="fallow">
      <h1 className="banner-heading">Join Our Social Community to <span className="text-main">Engage</span></h1>
    <div className="row">
        <div className="col-12 col-md-12 col-lg-6">
          <div className="whatsapp text-center rounded-5 p-3 p-lg-5 mt-4">
            <h1 className="card-heading text-white fs-2">
            Join to Out Whatsapp <br /> Community
            </h1>
            <button className="btn bg-black text-success fs-4 p-2 px-3 rounded-5"> <i class="bi bi-whatsapp"></i> Join to Whatsapp</button>
          </div>
        </div>
         <div className="col-12 col-md-12 col-lg-6">
         <div className="telegram text-center rounded-5 p-3 p-lg-5 mt-4">
            <h1 className="card-heading text-white fs-2">
            Join to Out Telegram  <br />Community
            </h1>
            <button className="btn bg-black text-primary fs-4 p-2 px-3 rounded-5"> <i class="bi bi-telegram"></i> Join to Telegram</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Follow
