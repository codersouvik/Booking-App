import './searchItem.css'

const SearchItem = () => {
  return (
    <div className="searchItem">
    <img
      src="https://cf.bstatic.com/xdata/images/hotel/square600/475598686.webp?k=68a660e1b7d95dfc31a7af3e907bab117cd3d27447342e5fc80ed426c8d92a2b&o="
      alt=""
      className="siImg"
    />
    <div className="siDesc">
      <h1 className="siTitle">Palm Everland</h1>
      <span className="siDistance">500m from center</span>
      <span className="siTaxiOp">Free airport taxi</span>
      <span className="siSubtitle">
        Studio Apartment with Air conditioning
      </span>
      <span className="siFeatures">
        Entire studio • 1 bathroom • 21m² 1 full bed
      </span>
      <span className="siCancelOp">Free cancellation </span>
      <span className="siCancelOpSubtitle">
        You can cancel later, so lock in this great price today!
      </span>
    </div>
    <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className="siDetailTexts">
        <span className="siPrice">₹2000</span>
        <span className="siTaxOp">Includes taxes and fees</span>
        <button className="siCheckButton">See availability</button>
      </div>
    </div>
  </div>
  )
}

export default SearchItem