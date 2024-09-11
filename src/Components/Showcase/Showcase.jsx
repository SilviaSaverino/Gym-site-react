import React from 'react'
import './Showcase.css'
import gallery_1 from '../../assets/images/gallery-1.png'
import gallery_2 from '../../assets/images/gallery-2.png'
import gallery_3 from '../../assets/images/gallery-3.png'
import gallery_4 from '../../assets/images/gallery-4.png'
import white_arrow from '../../assets/images/white-arrow.png'

const Showcase = () => {
  return (
    <div className='showcase'>
        <div className="gallery">
            <img src={gallery_1} alt="young woman excercising at the gym" />
            <img src={gallery_2} alt="couple of friends exercising at the gym" />
            <img src={gallery_3} alt="young woman excercising at the gym"/>
            <img src={gallery_4} alt="young woman excercising at the gym" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="icon of a white arrow pointing right" /></button>
    </div>
  )
}

export default Showcase