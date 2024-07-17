import styles from './Card.module.css'
import Maroon5Img from './img/maroon-5.jpg'


function HomeCard2() {

  return (
    <div className={styles.card}>
      <div className="card">
        <img className="card-image" src={Maroon5Img} alt="" width={300}/>
        <h2 className="card-title">Maroon 5</h2>
        <p className="card-text">Coming Soon</p>
      </div>
    </div>
    
  )
}

export default HomeCard2