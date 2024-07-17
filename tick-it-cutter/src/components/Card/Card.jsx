import styles from './Card.module.css'
import DonToliverImg from './img/Don-Toliver.png'


function HomeCard() {

  return (
    <div className={styles.card}>
      <div className="card">
        <img className="card-image" src={DonToliverImg} alt="" width={300}/>
        <h2 className="card-title">Don Toliver</h2>
        <p className="card-text">Coming Soon</p>
      </div>
    </div>
    
  )
}

export default HomeCard