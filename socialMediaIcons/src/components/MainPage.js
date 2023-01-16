import React from 'react'
import { MediaData } from '../data/MediaData'

const MainPage = () => {
  return (
    <React.Fragment>
    <main>
      <div className="h-screen w-full bg-black centered md:w-2/3 md:mx-auto">
        <div className="flex space-x-2">
            {
                MediaData.map((item, index) => {
                    return(
                        <div key={index}>
                            <a href={item.href} target="_blank">
                            <img src={item.img} alt='media' className="h-28"/>
                            </a>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </main>
  </React.Fragment>
  )
}

export default MainPage