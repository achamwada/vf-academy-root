export interface Property {
  value: number;
  deposit: number;
  title: string;
  description: string;
  location: string;
  primaryAsset: string;
}
const properties: Property[] = [
  {
    deposit: 40000,
    value: 25000,
    description: 'description text here',
    location: 'location here',
    title: 'Property 1',
    primaryAsset:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    deposit: 20000,
    value: 20000,
    description: 'description text here',
    location: 'location here',
    title: 'Property 2',
    primaryAsset:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    deposit: 2000,
    value: 30000,
    description: 'description text here',
    location: 'location here',
    title: 'Property 3',
    primaryAsset:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80',
  },
  // {
  //   deposit: 20000,
  //   value: 200000,
  //   description: 'description text here',
  //   location: 'location here',
  //   title: 'Property 4',
  //   primaryAsset:
  //     'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  // },
  // {
  //   deposit: 20000,
  //   value: 200000,
  //   description: 'description text here',
  //   location: 'location here',
  //   title: 'Property 5',
  //   primaryAsset:
  //     'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  // },
];

export default properties;
