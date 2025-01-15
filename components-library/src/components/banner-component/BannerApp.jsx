import Banner from "./Banners"
import styles from './BannerApp.module.css'

function BannerApp() {

  return (
    <>
      <h1 className={styles.BannerHeader1}>BANNERS</h1>
      <h2 className={styles.BannerHeader2}>MULTI LINE / SINGLE LINE</h2>
      
      <Banner.Success>Success</Banner.Success>
      <Banner.Warning>Warning</Banner.Warning>
      <Banner.Error>Error</Banner.Error>
      <Banner.Neutral>Neutral</Banner.Neutral>
    </>
  )
}

export default BannerApp
