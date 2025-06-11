import { type SchemaTypeDefinition } from 'sanity';
import { blogPost } from './blogPost';
import { author } from './author';
import { category } from './category';
import { blockContent } from './blockContent';

export const schemaTypes: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, author, category, blockContent],
};