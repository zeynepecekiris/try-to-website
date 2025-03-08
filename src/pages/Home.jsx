import { Container, Typography, Box, Grid, Paper, Divider } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <Box sx={{ py: 8 }}>
      {/* Ana Sayfa Bölümü */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Box sx={{ 
          textAlign: "center", 
          mb: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              color: "#2196F3",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              mb: 4
            }}
          >
            MobistoreX'e Hoş Geldiniz
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 8 }}>
            En yeni telefonlar ve aksesuarlar burada!
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 5,
                textAlign: "center",
                height: "100%",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-5px)"
                }
              }}
            >
              <PhoneAndroidIcon sx={{ fontSize: 80, color: "#2196F3", mb: 3 }} />
              <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Geniş Ürün Yelpazesi
              </Typography>
              <Typography color="text.secondary">
                En son model telefonlar ve aksesuarlar ile teknoloji ihtiyaçlarınızı karşılıyoruz.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 5,
                textAlign: "center",
                height: "100%",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-5px)"
                }
              }}
            >
              <LocalShippingIcon sx={{ fontSize: 80, color: "#2196F3", mb: 3 }} />
              <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Hızlı Teslimat
              </Typography>
              <Typography color="text.secondary">
                Türkiye'nin her yerine hızlı ve güvenli teslimat hizmeti sunuyoruz.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 5,
                textAlign: "center",
                height: "100%",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-5px)"
                }
              }}
            >
              <SupportAgentIcon sx={{ fontSize: 80, color: "#2196F3", mb: 3 }} />
              <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                7/24 Destek
              </Typography>
              <Typography color="text.secondary">
                Uzman ekibimiz her zaman yanınızda, sorularınıza anında çözüm sunuyoruz.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Sayfa Ayırıcı */}
      <Box sx={{ my: 16 }}>
        <Divider sx={{ 
          '&::before, &::after': {
            borderColor: 'rgba(33, 150, 243, 0.3)',
          }
        }}>
          <Typography variant="h4" color="primary" sx={{ px: 4, py: 2, fontWeight: 'bold' }}>
            Blog
          </Typography>
        </Divider>
      </Box>

      {/* Blog Bölümü */}
      <Box sx={{ bgcolor: 'transparent', mb: 16 }}>
        <Blog />
      </Box>

      {/* Sayfa Ayırıcı */}
      <Box sx={{ my: 16 }}>
        <Divider sx={{ 
          '&::before, &::after': {
            borderColor: 'rgba(33, 150, 243, 0.3)',
          }
        }}>
          <Typography variant="h4" color="primary" sx={{ px: 4, py: 2, fontWeight: 'bold' }}>
            Hakkımızda
          </Typography>
        </Divider>
      </Box>

      {/* Hakkımızda Bölümü */}
      <Box sx={{ bgcolor: 'transparent', mb: 16 }}>
        <About />
      </Box>

      {/* Sayfa Ayırıcı */}
      <Box sx={{ my: 16 }}>
        <Divider sx={{ 
          '&::before, &::after': {
            borderColor: 'rgba(33, 150, 243, 0.3)',
          }
        }}>
          <Typography variant="h4" color="primary" sx={{ px: 4, py: 2, fontWeight: 'bold' }}>
            İletişim
          </Typography>
        </Divider>
      </Box>

      {/* İletişim Bölümü */}
      <Box sx={{ bgcolor: 'transparent', mb: 16 }}>
        <Contact />
      </Box>

      {/* Footer Logo ve Copyright */}
      <Box 
        sx={{ 
          mt: 16, 
          py: 8, 
          borderTop: '1px solid rgba(33, 150, 243, 0.2)',
          background: 'linear-gradient(180deg, transparent, rgba(33, 150, 243, 0.05))'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: 3
          }}>
            <img 
              src="/DALL·E 2025-03-08 11.45.25 - A simple and modern icon using gradient colors, fitting a tech-themed online store. The icon should have a sleek and professional design, using smooth.webp" 
              alt="Mobil Mağaza Logo" 
              style={{ 
                height: '80px',
                filter: 'drop-shadow(0 0 10px rgba(33, 150, 243, 0.3))'
              }} 
            />
            <Typography 
              color="text.secondary" 
              variant="body2"
              sx={{ 
                opacity: 0.8,
                textAlign: 'center'
              }}
            >
              © 2024 MobistoreX. Tüm hakları saklıdır.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
