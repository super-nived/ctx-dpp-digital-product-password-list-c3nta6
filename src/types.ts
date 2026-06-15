export type AASCategory = 'Machine' | 'Material' | 'Product' | 'Tool' | 'Component';

export interface AASEntry {
  id: string;
  code: string;
  name: string;
  category: AASCategory;
  username: string;
  password: string;
  url?: string;
  description?: string;
}
