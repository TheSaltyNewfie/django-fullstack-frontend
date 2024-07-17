import styles from './Card.module.css'
import NickiMinajImg from './img/Nicki-Minaj.jpg'


function HomeCard2() {

  return (
    <div className={styles.card}>
      <div className="card">
        <img className="card-image" src={NickiMinajImg} alt="" width={300}/>
        <h2 className="card-title">Nicki Minaj</h2>
        <p className="card-text">Coming Soon</p>
      </div>
    </div>
    
  )
}

export default HomeCard2