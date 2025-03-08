import { Container, Typography, Grid, Paper, Box, Stack, Divider, keyframes } from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Animasyon keyframes tanımlamaları
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

function About() {
  const values = [
    {
      icon: <StorefrontIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Güvenilir Hizmet",
      description: "10 yılı aşkın süredir müşterilerimize en kaliteli ürünleri sunuyoruz."
    },
    {
      icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Uzman Kadro",
      description: "Teknoloji tutkunlarından oluşan ekibimizle size en iyi hizmeti veriyoruz."
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Müşteri Memnuniyeti",
      description: "Müşterilerimizin memnuniyeti bizim önceliğimizdir."
    }
  ];

  const missionItems = [
    "Sizlere en yeni teknolojiyi en iyi fiyatlarla sunmak",
    "Satın alma öncesi ve sonrası müşteri desteğiyle tam memnuniyet sağlamak",
    "Teknolojiyi sadece bir araç değil, hayatı kolaylaştıran bir deneyim haline getirmek",
    "Sizlerle birlikte büyüyerek, mobil dünyanın geleceğine yön vermek"
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      {/* Başlık Bölümü */}
      <Box sx={{ 
        mb: 6, 
        textAlign: 'center',
        animation: `${fadeIn} 1s ease-out`
      }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            mb: 2,
            textShadow: '0 0 10px rgba(33, 150, 243, 0.3)',
            '&:hover': {
              transform: 'scale(1.02)',
              transition: 'transform 0.3s ease'
            }
          }}
        >
          Hakkımızda
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          mb: 2,
          animation: `${slideIn} 1s ease-out 0.3s both`
        }}>
          <PhoneAndroidIcon sx={{ 
            fontSize: 30, 
            color: 'primary.main', 
            mr: 1,
            animation: `${pulse} 2s infinite ease-in-out`
          }} />
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ fontWeight: 'bold' }}
          >
            Teknolojiyi Tutkuyla Buluşturuyoruz
          </Typography>
        </Box>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}
        >
          Mobil Mağaza olarak 2014 yılından beri sadece bir teknoloji mağazası değil, bir deneyim merkezi olarak hizmet veriyoruz. 
          Amacımız, en son teknolojiyi herkes için erişilebilir, güvenilir ve heyecan verici hale getirmek.
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
        >
          Bugün binlerce teknoloji tutkunu ile aynı heyecanı paylaşarak, mobil dünyada bir adım önde olmanızı sağlamak için çalışıyoruz.
        </Typography>
      </Box>

      {/* Ana İçerik */}
      <Grid container spacing={6}>
        {/* Hikayemiz Bölümü - Tam Genişlik */}
        <Grid item xs={12}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 4, 
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              mb: 4,
              animation: `${fadeIn} 1s ease-out 0.6s both`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 30px rgba(174, 215, 255, 0.5)'
              }
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', textShadow: '0 0 8px rgba(174, 215, 255, 0.3)', display: 'flex', alignItems: 'center', gap: 1 }}>
              <StorefrontIcon />
              Hikayemiz
            </Typography>
            <Typography paragraph color="text.secondary">
              Teknolojiye olan tutkumuz, bizi 2014 yılında bu yola çıkmaya teşvik etti.
              O dönemde, kaliteli ve güvenilir mobil teknolojiye ulaşmanın zorluklarını biliyorduk. 
              Sadece bir mağaza olmak değil, insanların hayatlarını kolaylaştıran bir platform oluşturmak istedik.
            </Typography>
            <Typography paragraph color="text.secondary">
              İlk günden beri, en iyi markalarla en yeni ürünleri, en avantajlı fiyatlarla sunmaya odaklandık. 
              Ancak bizim için en önemli olan şey, müşterilerimize verdiğimiz değer ve güven oldu.
            </Typography>
            <Typography paragraph color="text.secondary" sx={{ mb: 0 }}>
              Bugün geldiğimiz noktada, Türkiye'nin en güvenilir mobil teknoloji mağazalarından biri olmanın 
              haklı gururunu yaşıyoruz. Müşterilerimiz yalnızca bir ürün satın almıyor, bizimle birlikte bir deneyimin parçası oluyor.
            </Typography>
          </Paper>
        </Grid>

        {/* Misyonumuz Bölümü - Tam Genişlik */}
        <Grid item xs={12}>
          <Paper 
            elevation={0} 
            sx={{ 
              p: 4, 
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              animation: `${fadeIn} 1s ease-out 0.9s both`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 30px rgba(255, 209, 220, 0.5)'
              }
            }}
          >
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmojiObjectsIcon />
                Misyonumuz
              </Typography>
              <Typography variant="h6" sx={{ color: 'primary.light', mb: 3 }}>
                Sadece Ürün Değil, Değer Sunuyoruz
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {missionItems.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    alignItems: 'flex-start',
                    animation: `${slideIn} 1s ease-out ${0.3 * (index + 1)}s both`
                  }}>
                    <CheckCircleIcon sx={{ 
                      color: 'primary.main', 
                      mt: 0.5,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.2) rotate(360deg)'
                      }
                    }} />
                    <Typography color="text.secondary">
                      {item}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
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
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      height: '100%',
                      animation: `${fadeIn} 1s ease-out ${0.3 * (index + 4)}s both`,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.05)',
                        boxShadow: '0 12px 30px rgba(255, 212, 186, 0.5)'
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
