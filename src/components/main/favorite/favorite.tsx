import React from 'react';
import './favorite.styles.css'

export default function Favorite() {
  return (
      <section className='favorite'>
        <img  className='favorite-img' src="https://storage.concert.ua/JTR/27/aK/66cdc4cd67ed9/7edd.jpg:31-eventpage-main_banner-desktop2x" alt="" />
        
        <div className='favorite-wrapper'>
            <div className='favorite-block-container'>
                <div className='favorite-trending-block'>
                    <p>Trending</p>
                </div>
                <div className='favorite-block'>
                    <h2>Name</h2>
                </div>
                <div className='favorite-date_info-container'>
                    <p>
                        Date
                    </p>
                    <p>
                        Info
                    </p>
                </div>
            </div>
            <div className='favorite-button-container'>
                <button id='button1'>
                    Придбати
                </button>
                <button id='button2'>
                    Детальніше
                </button>
            </div>
        </div>
      </section>
    )
}