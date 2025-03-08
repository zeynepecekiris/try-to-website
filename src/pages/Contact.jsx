import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Box,
  TextField,
  Button,
  Stack,
  Alert,
  Snackbar
} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      title: "Adres",
      details: ["Teknoloji Caddesi No: 123", "34000 İstanbul, Türkiye"]
    },
    {
      icon: <PhoneIcon />,
      title: "Telefon",
      details: ["+90 (212) 123 45 67", "+90 (532) 123 45 67"]
    },
    {
      icon: <EmailIcon />,
      title: "E-posta",
      details: ["info@mobilmagaza.com", "destek@mobilmagaza.com"]
    },
    {
      icon: <AccessTimeIcon />,
      title: "Çalışma Saatleri",
      details: ["Pazartesi - Cumartesi: 09:00 - 20:00", "Pazar: 10:00 - 18:00"]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      {/* Başlık */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "#1976D2",
            mb: 2,
            textShadow: '0 0 10px rgba(25, 118, 210, 0.3)'
          }}
        >
          İletişim
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 4, color: '#1976D2' }}
        >
          Sorularınız için bize ulaşın
        </Typography>
      </Box>

      <Grid container spacing={6} justifyContent="center">
        {/* İletişim Formu - Ortada */}
        <Grid item xs={12} md={8}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 4,
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(25, 118, 210, 0.2)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
            }}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: '#1976D2', 
                    fontWeight: 'bold', 
                    mb: 2, 
                    textShadow: '0 0 8px rgba(25, 118, 210, 0.2)',
                    textAlign: 'center'
                  }}
                >
                  Mesaj Gönderin
                </Typography>
                <TextField
                  fullWidth
                  label="Adınız"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#1976D2',
                      '& fieldset': {
                        borderColor: 'rgba(25, 118, 210, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(25, 118, 210, 0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#1976D2',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#1976D2',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="E-posta Adresiniz"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#1976D2',
                      '& fieldset': {
                        borderColor: 'rgba(25, 118, 210, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(25, 118, 210, 0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#1976D2',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#1976D2',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Konu"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#1976D2',
                      '& fieldset': {
                        borderColor: 'rgba(25, 118, 210, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(25, 118, 210, 0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#1976D2',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#1976D2',
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Mesajınız"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#1976D2',
                      '& fieldset': {
                        borderColor: 'rgba(25, 118, 210, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(25, 118, 210, 0.5)',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: '#1976D2',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#1976D2',
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#1976D2',
                    color: '#ffffff',
                    '&:hover': {
                      bgcolor: 'rgba(25, 118, 210, 0.9)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  Mesaj Gönder
                </Button>
              </Stack>
            </form>
          </Paper>
        </Grid>

        {/* İletişim Bilgileri - Altta 2'li Grid */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {contactInfo.map((info, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(25, 118, 210, 0.2)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    height: '100%',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 20px rgba(25, 118, 210, 0.2)'
                    }
                  }}
                >
                  {React.cloneElement(info.icon, { 
                    sx: { 
                      fontSize: 40, 
                      color: '#1976D2',
                      filter: 'drop-shadow(0 0 8px rgba(25, 118, 210, 0.3))'
                    } 
                  })}
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#1976D2' }}>
                      {info.title}
                    </Typography>
                    {info.details.map((detail, i) => (
                      <Typography key={i} sx={{ color: '#1976D2' }}>
                        {detail}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Harita */}
        <Grid item xs={12}>
          <Paper 
            elevation={0} 
            sx={{ 
              height: '400px', 
              width: '100%', 
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(25, 118, 210, 0.2)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.6201976359!2d28.871754966805282!3d41.005495893327666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1648226528092!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Paper>
        </Grid>
      </Grid>

      {/* Başarı Mesajı */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          variant="filled"
          sx={{
            bgcolor: '#1976D2',
          }}
        >
          Mesajınız başarıyla gönderildi!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact;
