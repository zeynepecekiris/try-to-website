import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Box } from "@mui/material";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Yeni Nesil Akıllı Telefonlar",
      summary: "2024'ün en çok beklenen akıllı telefon modelleri ve özellikleri",
      image: "https://source.unsplash.com/random/800x600/?smartphone",
      date: "7 Mart 2024"
    },
    {
      id: 2,
      title: "Mobil Teknoloji Trendleri",
      summary: "Mobil dünyada öne çıkan yeni teknolojiler ve gelişmeler",
      image: "https://source.unsplash.com/random/800x600/?technology",
      date: "6 Mart 2024"
    },
    {
      id: 3,
      title: "Telefon Kamera Karşılaştırması",
      summary: "En iyi kamera performansına sahip telefonların detaylı karşılaştırması",
      image: "https://source.unsplash.com/random/800x600/?camera-phone",
      date: "5 Mart 2024"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 6 }}>
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
          Blog
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Mobil teknoloji dünyasından en güncel haberler ve incelemeler
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                background: 'linear-gradient(145deg, #132F4C, #0A1929)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 20px rgba(255, 255, 255, 0.3)'
                }
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                />
                <CardContent>
                  <Typography
                    variant="caption"
                    sx={{ 
                      mb: 1, 
                      display: 'block',
                      color: '#ffffff',
                      opacity: 0.8,
                      textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
                    }}
                  >
                    {post.date}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#ffffff',
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#ffffff',
                      opacity: 0.9,
                      textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    {post.summary}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Blog;
