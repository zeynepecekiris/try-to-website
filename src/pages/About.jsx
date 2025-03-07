import { Container, Typography, Grid, Paper, Box, Stack, Divider } from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';

function About() {
  const values = [
    {
      icon: <StorefrontIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      title: "Güvenilir Hizmet",
      description: "10 yılı aşkın süredir müşterilerimize en kaliteli ürünleri sunuyoruz."
    },
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      title: "Uzman Kadro",
      description: "Teknoloji tutkunlarından oluşan ekibimizle size en iyi hizmeti veriyoruz."
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: '#2196F3' }} />,
      title: "Müşteri Memnuniyeti",
      description: "Müşterilerimizin memnuniyeti bizim önceliğimizdir."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      {/* Başlık Bölümü */}
      <Box sx={{ mb: 6, textAlign: 'left' }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            mb: 2,
            textShadow: '0 0 10px rgba(33, 150, 243, 0.3)'
          }}
        >
          Hakkımızda
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 800 }}
        >
          2014 yılından beri teknoloji tutkunlarına hizmet veriyoruz
        </Typography>
      </Box>

      {/* Ana İçerik */}
      <Grid container spacing={6}>
        {/* Sol Taraf - Şirket Hikayesi */}
        <Grid item xs={12} md={6}>
          <Stack spacing={4}>
            <Box>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', textShadow: '0 0 8px rgba(33, 150, 243, 0.2)' }}>
                Hikayemiz
              </Typography>
              <Typography paragraph color="text.secondary">
                Mobil Mağaza olarak, 2014 yılında teknoloji tutkunlarına en iyi hizmeti sunma hayaliyle yola çıktık. 
                Bugün, Türkiye'nin önde gelen mobil teknoloji perakendecilerinden biri olarak, 
                müşterilerimize en son teknoloji ürünlerini sunmaya devam ediyoruz.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', textShadow: '0 0 8px rgba(33, 150, 243, 0.2)' }}>
                Misyonumuz
              </Typography>
              <Typography paragraph color="text.secondary">
                Müşterilerimize en kaliteli mobil teknoloji ürünlerini, en iyi fiyatlarla sunmak ve 
                satış sonrası destek hizmetlerimizle tam müşteri memnuniyeti sağlamak.
              </Typography>
            </Box>
          </Stack>
        </Grid>

        {/* Sağ Taraf - Değerlerimiz */}
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 4, 
              background: 'linear-gradient(145deg, #132F4C, #0A1929)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Stack spacing={4}>
              {values.map((value, index) => (
                <Box key={index}>
                  {index > 0 && <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />}
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      {value.icon}
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.light' }}>
                        {value.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {value.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        {/* Alt Bölüm - İstatistikler */}
        <Grid item xs={12}>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={4}>
              {[
                { number: "10+", label: "Yıllık Deneyim" },
                { number: "50,000+", label: "Mutlu Müşteri" },
                { number: "1000+", label: "Ürün Çeşidi" },
                { number: "30+", label: "Uzman Çalışan" }
              ].map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 3, 
                      textAlign: 'center',
                      background: 'linear-gradient(145deg, #132F4C, #0A1929)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      height: '100%',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 20px rgba(33, 150, 243, 0.2)'
                      }
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontWeight: 'bold',
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        textShadow: '0 0 10px rgba(33, 150, 243, 0.3)'
                      }}
                    >
                      <StarIcon sx={{ fontSize: 20, color: 'primary.light' }} />
                      {stat.number}
                    </Typography>
                    <Typography color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
