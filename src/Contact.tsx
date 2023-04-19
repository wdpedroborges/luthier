import { useState } from 'react'

import Hero from './Hero'
import Services from './Services'
import Testimonials from './Testimonials'
import Typography from '@mui/material/Typography'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [state, setState] = useState('')

  const handleSubmit = (event: any) => {
    event.preventDefault();
    
    if (name !== '' && email !== '' && message !== '') {
      setState('success')

      setName('')
      setEmail('')
      setMessage('')
    } else {
      setState('error')
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    }
  }

  return (
    <>
      <Typography variant="h2" style={{marginTop: '50px', marginBottom: '20px'}}>Contact</Typography>
      <form onSubmit={handleSubmit} style={{width: '75%', margin: '3rem auto'}}>
      {
        state === 'success' && <Alert severity="success">Your message was sent! Please, wait until we answer it.</Alert>
      }
      {
        state === 'error' && <Alert severity="error">Please, fill all the text fields.</Alert>
      }
        <TextField
          label="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="E-mail"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Mensagem"
          multiline
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Enviar
        </Button>
      </form>
    </>
  )
}

export default Contact