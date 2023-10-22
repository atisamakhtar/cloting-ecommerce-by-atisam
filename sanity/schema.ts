import { type SchemaTypeDefinition } from 'sanity';
import { productScheme } from './products'; 

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productScheme],
}
