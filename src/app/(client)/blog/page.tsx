import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { client, BLOG_POSTS_QUERY } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

async function getBlogPosts() {
  return await client.fetch(BLOG_POSTS_QUERY)
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <Container maxWidth="md" sx={{ py: 12 }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
        Blog
      </Typography>
      
      <Grid container spacing={3}>
        {posts.map((post: any) => (
          <Grid size={{xs: 12, md: 6}} key={post._id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3,
                }
              }}
            >
              {post.mainImage && (
                <Box sx={{ position: 'relative', height: 200 }}>
                  <Image
                    src={urlFor(post.mainImage).width(400).height(200).url()}
                    alt={post.mainImage.alt || post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              )}
              
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  <Link 
                    href={`/blog/${post.slug.current}`}
                    style={{ 
                      textDecoration: 'none', 
                      color: 'inherit',
                      // '&:hover': {
                      //   color: 'primary.main'
                      // }
                    }}
                  >
                    {post.title}
                  </Link>
                </Typography>
                
                {post.excerpt && (
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ 
                      mb: 2,
                      flexGrow: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {post.excerpt}
                  </Typography>
                )}
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="caption" color="text.secondary">
                    By {post.author?.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" component="time" dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </Typography>
                </Box>
                
                {post.categories && post.categories.length > 0 && (
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {post.categories.map((category: any) => (
                      <Chip
                        key={category.slug.current}
                        label={category.title}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}