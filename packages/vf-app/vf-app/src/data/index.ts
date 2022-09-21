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
    deposit: 20000,
    value: 200000,
    description: 'description text here',
    location: 'location here',
    title: 'Property 1',
    primaryAsset:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    deposit: 20000,
    value: 200000,
    description: 'description text here',
    location: 'location here',
    title: 'Property 2',
    primaryAsset:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    deposit: 20000,
    value: 200000,
    description: 'description text here',
    location: 'location here',
    title: 'Property 3',
    primaryAsset:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
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
