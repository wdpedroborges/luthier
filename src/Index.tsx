import Hero from './Hero'
import Services from './Services'
import Testimonials from './Testimonials'
import Typography from '@mui/material/Typography'

function Index() {
  return (
    <>
      <Hero/>
      <div className="services-container">
        <Typography variant="h2" style={{marginBottom: '2rem'}}>Services</Typography>
        <Services/>
      </div>
      <Testimonials/>
    </>
  )
}

export default Index