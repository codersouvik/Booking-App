import './feaatureProperties.css'

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/189901067.webp?k=480b709db194e982ef71b3adcfcd7d1635b42b5968be0a5d8c1fa2c80996e9b1&o=" alt=""  className='fpImg'/>
            <span className="fpName">Hindu Hotel</span>
            <span className="fpCity">Varanasi</span>
            <span className="fpPrice">Starting from  ₹{1500} per day</span>
           <div className="fpRating">
            <button>8.9</button>
            <span>Fabulous</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt=""  className='fpImg'/>
            <span className="fpName">Laview</span>
            <span className="fpCity">Chennai</span>
            <span className="fpPrice">Starting from  ₹{1200} per day</span>
           <div className="fpRating">
            <button>9.0</button>
            <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/229265869.webp?k=5a68bc45bd2a7fdf582cccf4e9dcc1678d148d381f859e8f3d4ff163ad2e29e2&o=" alt=""  className='fpImg'/>
            <span className="fpName">Hotel paradise</span>
            <span className="fpCity">Rjasthan</span>
            <span className="fpPrice">Starting from  ₹{5000} per day</span>
           <div className="fpRating">
            <button>9.5</button>
            <span>Outstanding</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=" alt=""  className='fpImg'/>
            <span className="fpName">JwMarriot</span>
            <span className="fpCity">Kolkata</span>
            <span className="fpPrice">Starting from  ₹{10000} per day</span>
           <div className="fpRating">
            <button>8.5</button>
            <span>Good</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties