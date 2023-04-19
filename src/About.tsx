import Hero from './Hero'
import Services from './Services'
import Testimonials from './Testimonials'
import ActionAreaCard from './Card'
import Typography from '@mui/material/Typography'

const team = [
  {
    title: 'Matteo Sellas',
    description: 'Matteo Sellas (sometimes also written Mateo Sellas or in original German Matthäus Seelos) was a German luthier born in 1580 in Füssen who worked in Venice from 1620–1650 and is best known for building lutes, archlutes and baroque guitars.',
    imageSrc: 'https://randomuser.me/api/portraits/men/1.jpg',
    imageAlt: 'Random Image'
  },
  {
    title: 'Leopold Widhalm',
    description: 'Born in Horn, Austria, he worked on many old Bologna lutes that inspired his later work in his manufacture of lutes, violins and violoncellos in Nuremberg.',
    imageSrc: 'https://randomuser.me/api/portraits/men/2.jpg',
    imageAlt: 'Random Image'
  },
  {
    title: 'Nicolas François Vuillaume',
    description: 'Nicolas François Vuillaume (1802–1876) was an important French luthier of the Vuillaume family, and younger brother of the illustrious Jean-Baptiste Vuillaume.',
    imageSrc: 'https://randomuser.me/api/portraits/men/3.jpg',
    imageAlt: 'Random Image'
  }
]

function About() {
  return (
    <>
      <Typography variant="h2" style={{marginTop: '50px', marginBottom: '20px'}}>About</Typography>
      <div className="text-image-about">
        <div className="text">
          <p>Welcome to our website! We are a team of experienced luthiers who are dedicated to crafting some of the finest instruments in the world.</p>
          <p>Our passion for music and craftsmanship drives us to create instruments that not only sound amazing but also look and feel exceptional. We believe that the process of building an instrument is just as important as the final product, which is why we take great care in every step of the process.</p>
          <p>Our team has decades of experience in crafting custom instruments, ranging from classical guitars and violins to mandolins and ukuleles. We use only the finest materials and techniques to create instruments that are unique, beautiful, and built to last.</p>
          <p>We are committed to providing our clients with personalized attention and exceptional customer service. We work closely with musicians, collectors, and enthusiasts to ensure that each instrument is tailored to their specific needs and preferences.</p>
          <p>We take great pride in our work and are honored to have our instruments played by some of the most talented musicians in the world. Our instruments have been featured in concerts, recordings, and competitions around the globe, and we continue to strive for excellence in everything we do.</p>
          <p>Thank you for visiting our website. If you have any questions or would like to inquire about a custom instrument, please don't hesitate to contact us. We would be honored to work with you and create an instrument that you will cherish for a lifetime.</p>
        </div>
        <img src="image4.jpg"/>
      </div>
      <Typography variant="h3" style={{marginTop: '50px', marginBottom: '20px'}}>Our Team</Typography>
      <div className="cards">
        {
          team.map((member, index) => {
            return (
              <div key={index}>
                <ActionAreaCard
                  imageSrc={member.imageSrc}
                  imageAlt={member.imageAlt}
                  title={member.title}
                  description={member.description}
                />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default About