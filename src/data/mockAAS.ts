import { AASEntry } from '../types';

export const mockAASData: AASEntry[] = [
  { id: '1',  code: 'SP023',        name: 'SP023',        category: 'Machine',   username: 'admin_sp023',  password: 'Sp023@Sec!42',   url: 'http://192.168.1.23',  description: 'CNC Spindle Machine' },
  { id: '2',  code: 'RAM006',       name: 'RAM006',       category: 'Machine',   username: 'operator',     password: 'Ram006#2024!',   url: 'http://192.168.1.6',   description: 'Robotic Arm Module' },
  { id: '3',  code: 'P30',          name: 'P30',          category: 'Product',   username: 'prod_user',    password: 'P30$ecure99',    url: 'http://192.168.2.30',  description: 'Product Unit P30' },
  { id: '4',  code: 'P18',          name: 'P18',          category: 'Product',   username: 'prod_admin',   password: 'P18!Xyzw22',     url: 'http://192.168.2.18',  description: 'Product Unit P18' },
  { id: '5',  code: 'Mittelformat', name: 'Mittelformat', category: 'Material',  username: 'mat_admin',    password: 'Mitt3l@2024',    url: 'http://192.168.3.10',  description: 'Medium Format Material' },
  { id: '6',  code: 'M03',          name: 'M03',          category: 'Machine',   username: 'mc_op3',       password: 'M03#Mach!n3',    url: 'http://192.168.1.3',   description: 'Machine Module M03' },
  { id: '7',  code: 'Kleinformat 2',name: 'Kleinformat 2',category: 'Material',  username: 'mat_op',       password: 'Kl2!Small44',    url: 'http://192.168.3.12',  description: 'Small Format Material 2' },
  { id: '8',  code: 'Kleinformat 1',name: 'Kleinformat 1',category: 'Material',  username: 'mat_op',       password: 'Kl1#Format!',    url: 'http://192.168.3.11',  description: 'Small Format Material 1' },
  { id: '9',  code: 'TL-001',       name: 'TL-001',       category: 'Tool',      username: 'tool_mgr',     password: 'TL001@Tool!',    url: 'http://192.168.4.1',   description: 'Precision Tool Set' },
  { id: '10', code: 'TL-002',       name: 'TL-002',       category: 'Tool',      username: 'tool_mgr',     password: 'TL002#Wr3nch',   url: 'http://192.168.4.2',   description: 'Assembly Tool Kit' },
  { id: '11', code: 'COMP-A1',      name: 'COMP-A1',      category: 'Component', username: 'comp_user',    password: 'CompA1#2024',    url: 'http://192.168.5.1',   description: 'Component Module A1' },
  { id: '12', code: 'COMP-B2',      name: 'COMP-B2',      category: 'Component', username: 'comp_admin',   password: 'CompB2@Sec!',    url: 'http://192.168.5.2',   description: 'Component Module B2' },
  { id: '13', code: 'MC-101',       name: 'MC-101',       category: 'Machine',   username: 'mc_admin',     password: 'MC101$Mach!',    url: 'http://192.168.1.101', description: 'Manufacturing Cell 101' },
  { id: '14', code: 'MC-102',       name: 'MC-102',       category: 'Machine',   username: 'mc_admin',     password: 'MC102@Cell2',    url: 'http://192.168.1.102', description: 'Manufacturing Cell 102' },
  { id: '15', code: 'PRD-X5',       name: 'PRD-X5',       category: 'Product',   username: 'prd_usr',      password: 'PrdX5!2024',     url: 'http://192.168.2.25',  description: 'Product X5 Series' },
];
