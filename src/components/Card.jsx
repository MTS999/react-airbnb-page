
import star from '/images/star.png'; // Assuming the star.png is located in the 'assets' folder.

export default function Card(promp) {
//  console.log(promp)
  const imagePath = '/images/' + promp.dat1.coverImg; // Constructing the full image path.
  let badgeText
  if (promp.dat1.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (promp.dat1.location === "Online") {
      badgeText = "ONLINE"
  }
  // console.log(badgeText)
  return (
    <div className="card--1">
      {badgeText && <div className="card--badge">{badgeText}</div>}

      <img className="card--link" src={imagePath} alt="photo" />
      <div className="card--rating">
        <img className="card--star" src={star} alt="photo" />
        <span>{promp.dat1.stats.rating}</span>
        <span className="gray"> ({promp.dat1.stats.reviewCount}) .</span>
        <span className="gray">{promp.dat1.location}</span>
      </div>
      <p className="card--text">{promp.dat1.title}</p>
      <p className="card--price">
        <span className="bold">From ${promp.dat1.price}</span> / person
      </p>
    </div>
  );
}
