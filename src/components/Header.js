import React from 'react'
import "./header.css"

const Header = () => {
    return (
        <div className="App">
          <span onClick={()=>window.scroll(0,0)} className='header'>
               🎬 Movies World 🎥🎬
               </span>
        </div>
      );
}

export default Header