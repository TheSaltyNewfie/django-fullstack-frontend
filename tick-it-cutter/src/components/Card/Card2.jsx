import styles from './Card.module.css'
import TeddySwimsImg from './img/TeddySwims.webp'


function HomeCard2() {

  return (
    <div className={styles.card}>
      <div className="card">
        <img className="card-image" src={TeddySwimsImg} alt="" width={300}/>
        <h2 className="card-title">Teddy Swims</h2>
        <p className="card-text">Coming Soon</p>
      </div>
    </div>
    
  )
}

export default HomeCard2