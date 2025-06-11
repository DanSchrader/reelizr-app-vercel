import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { client, BLOG_POST_QUERY } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { notFound } from 'next/navigation';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// PortableText custom components
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }

      return (
        <Box sx={{ my: 4 }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: 400,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 2
            }}
          >
            <Image
              src={urlFor(value).width(800).height(400).url()}
              alt={value.alt || 'Blog image'}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            />
          </Box>
          {(value.alt || value.caption) && (
            <Typography 
              variant="caption" 
              sx={{ 
                display: 'block', 
                mt: 1, 
                textAlign: 'center',
                color: 'text.secondary',
                fontStyle: 'italic'
              }}
            >
              {value.caption || value.alt}
            </Typography>
          )}
        </Box>
      );
    }
  },
  marks: {
    link: ({ children, value }: any) => {
      const href = value?.href;
      if (!href) {
        return <span>{children}</span>;
      }

      // Check if it's an external link
      const isExternal = href.startsWith('http');
      
      return (
        <Box
          component="a"
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          sx={{
            color: 'primary.main',
            textDecoration: 'underline',
            '&:hover': {
              textDecoration: 'none'
            }
          }}
        >
          {children}
        </Box>
      );
    }
  },
  block: {
    // Custom styling for different block types
    h1: ({ children }: any) => (
      <Typography variant="h1" component="h1" sx={{ mt: 4, mb: 2, fontSize: '2.5rem', fontWeight: 700 }}>
        {children}
      </Typography>
    ),
    h2: ({ children }: any) => (
      <Typography variant="h2" component="h2" sx={{ mt: 4, mb: 2, fontSize: '2rem', fontWeight: 600 }}>
        {children}
      </Typography>
    ),
    h3: ({ children }: any) => (
      <Typography variant="h3" component="h3" sx={{ mt: 3, mb: 2, fontSize: '1.5rem', fontWeight: 600 }}>
        {children}
      </Typography>
    ),
    h4: ({ children }: any) => (
      <Typography variant="h4" component="h4" sx={{ mt: 3, mb: 2, fontSize: '1.25rem', fontWeight: 600 }}>
        {children}
      </Typography>
    ),
    blockquote: ({ children }: any) => (
      <Box
        component="blockquote"
        sx={{
          borderLeft: 4,
          borderColor: 'primary.main',
          pl: 3,
          py: 1,
          my: 3,
          ml: 0,
          fontStyle: 'italic',
          color: 'text.secondary',
          backgroundColor: 'grey.50',
          borderRadius: 1
        }}
      >
        <Typography variant="body1" component="p">
          {children}
        </Typography>
      </Box>
    ),
    normal: ({ children }: any) => (
      <Typography variant="body1" component="p" sx={{ mb: 2, fontSize: '1.125rem', lineHeight: 1.75 }}>
        {children}
      </Typography>
    )
  },
  list: {
    bullet: ({ children }: any) => (
      <Box component="ul" sx={{ pl: 3, mb: 2 }}>
        {children}
      </Box>
    ),
    number: ({ children }: any) => (
      <Box component="ol" sx={{ pl: 3, mb: 2 }}>
        {children}
      </Box>
    )
  },
  listItem: {
    bullet: ({ children }: any) => (
      <Typography component="li" sx={{ mb: 1 }}>
        {children}
      </Typography>
    ),
    number: ({ children }: any) => (
      <Typography component="li" sx={{ mb: 1 }}>
        {children}
      </Typography>
    )
  }
};

async function getBlogPost(slug: string) {
  return await client.fetch(BLOG_POST_QUERY, { slug })
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <Container maxWidth="md" sx={{ py: 12}}>
      <Box component="article" sx={{ py: 4 }}>
        
        {/* Header */}
        <Box component="header" sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            component="h1"
          >
            {post.title}
          </Typography>

          {post.excerpt && (
            <Typography>
              {post.excerpt}
            </Typography>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            {post.author?.image && (
              <Avatar
                src={urlFor(post.author.image).width(48).height(48).url()}
                alt={post.author.name}
                sx={{ width: 48, height: 48 }}
              />
            )}
            <Box>
              <Typography>
                {post.author?.name}
              </Typography>
              <Typography
                component="time"
                dateTime={post.publishedAt}
                sx={{ color: 'text.secondary' }}
              >
                {new Date(post.publishedAt).toLocaleDateString('de-DE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Typography>
            </Box>
          </Box>

          {post.categories && post.categories.length > 0 && (
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {post.categories.map((category: any) => (
                <Chip
                  key={category.slug.current}
                  label={category.title}
                  variant="filled"
                  color="primary"
                  size="small"
                />
              ))}
            </Stack>
          )}
        </Box>

        {/* Main Image */}
        {post.mainImage && (
          <Box sx={{ mb: 4 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: 384,
                borderRadius: 2,
                overflow: 'hidden',
                mb: 1
              }}
            >
              <Image
                src={urlFor(post.mainImage).width(800).height(400).url()}
                alt={post.mainImage.alt || post.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
            {post.mainImage.alt && (
              <Typography 
                variant="caption" 
                sx={{ 
                  display: 'block', 
                  textAlign: 'center',
                  color: 'text.secondary',
                  fontStyle: 'italic'
                }}
              >
                {post.mainImage.alt}
              </Typography>
            )}
          </Box>
        )}

        {/* Content with custom PortableText components */}
        <Box>
          <PortableText 
            value={post.body} 
            components={portableTextComponents}
          />
        </Box>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <Box sx={{ mt: 4, pt: 3 }}>
            <Divider sx={{ mb: 2 }} />
            <Typography
              variant="subtitle2"
              sx={{ color: 'text.secondary', mb: 1, fontWeight: 600 }}
            >
              Tags:
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
              {post.tags.map((tag: string) => (
                <Chip
                  key={tag}
                  label={`#${tag}`}
                  variant="outlined"
                  size="small"
                  sx={{
                    backgroundColor: 'grey.100',
                    '&:hover': {
                      backgroundColor: 'grey.200',
                    }
                  }}
                />
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </Container>
  )
}