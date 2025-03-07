import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "#2196F3",
            mb: 2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          Mobil Mağazamıza Hoş Geldiniz
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          En yeni telefonlar ve aksesuarlar burada!
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              height: "100%",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-5px)"
              }
            }}
          >
            <PhoneAndroidIcon sx={{ fontSize: 60, color: "#2196F3", mb: 2 }} />
            <Typography variant="h5" gutterBottom>
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
              p: 3,
              textAlign: "center",
              height: "100%",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-5px)"
              }
            }}
          >
            <LocalShippingIcon sx={{ fontSize: 60, color: "#2196F3", mb: 2 }} />
            <Typography variant="h5" gutterBottom>
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
              p: 3,
              textAlign: "center",
              height: "100%",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-5px)"
              }
            }}
          >
            <SupportAgentIcon sx={{ fontSize: 60, color: "#2196F3", mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              7/24 Destek
            </Typography>
            <Typography color="text.secondary">
              Uzman ekibimiz her zaman yanınızda, sorularınıza anında çözüm sunuyoruz.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
