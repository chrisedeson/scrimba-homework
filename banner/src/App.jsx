import Banner from "./Banners"

function App() {

  return (
    <>
      <h1>BANNERS</h1>
      <h2>MULTI LINE / SINGLE LINE</h2>
      
      <Banner.Success>Success</Banner.Success>
      <Banner.Warning>Warning</Banner.Warning>
      <Banner.Error>Error</Banner.Error>
      <Banner.Neutral>Neutral</Banner.Neutral>
    </>
  )
}

export default App
