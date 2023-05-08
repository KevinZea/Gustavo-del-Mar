import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: '10 cantantes',
    subtitle: 'Nuestros mejores musicos para un gran espectáculo.',
  },
  {
    imgUrl: images.award01,
    title: '10 Canciones',
    subtitle: 'Tus canciones favoritas o seleccionadas de nuestro repertorio.',
  },
  {
    imgUrl: images.award05,
    title: 'Recordatorio + Sonido',
    subtitle: 'Obsequiamos un regalo para conmemorar ese gran dia y el sonido nosotros nos encargamos.',
  },
  {
    imgUrl: images.award03,
    title: 'Homenaje Unico',
    subtitle: 'Daremos un Homenaje en nuestro espacio con una dedicatoria que de emociones increibles a ese dia especial',
  },
];

export default { wines, cocktails, awards };
