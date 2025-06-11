import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})

// GROQ queries
export const BLOG_POSTS_QUERY = `*[_type == "blogPost" && status == "published"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  mainImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  author-> {
    name,
    slug,
    image {
      asset-> {
        _id,
        url
      }
    }
  },
  categories[]-> {
    title,
    slug
  }
}`

export const BLOG_POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  body,
  mainImage {
    asset-> {
      _id,
      url
    },
    alt
  },
  author-> {
    name,
    slug,
    bio,
    image {
      asset-> {
        _id,
        url
      }
    }
  },
  categories[]-> {
    title,
    slug
  },
  tags
}`