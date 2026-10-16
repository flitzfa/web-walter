/**
 * Single source of editable content for this artist site.
 * To reuse this project for another artist, update this file and the assets in /public.
 */
export const site = {
  artist: {
    name: 'Walter Zelaya',
    role: 'Guitarrista · Buenos Aires',
    description: 'Guitarrista de Buenos Aires. Proyectos propios, colaboraciones y música en movimiento.',
    bio: 'Walter Zelaya es guitarrista y músico de la escena de Buenos Aires. Se formó en el Conservatorio de Música Leopoldo Marechal y profundizó su lenguaje en armonía e improvisación jazz con Daniel Pellegrini, Pino Marrone y Néstor Gómez, entre otros; composición con Javier González; y arreglos para secciones de vientos con Bernardo Vásquez y Valentín Reiners. Acompañó proyectos de folklore y participó en grupos de jazz y fusión, compartiendo música con Leo Villagra, Leopoldo Deza, Manolo Salguero y Jero Santillán. Integró La Tríada, proyecto instrumental con Marito y Nelson que se presentó como trío en el Festival de Baradero. Actualmente forma parte de 620 Trío y Matungo Ensamble, y lleva su música a teatros, bares y festivales.',
    email: 'hola@walterzelaya.com', // TODO: Reemplazar por el correo real.
  },
  hero: {
    eyebrow: 'Música en vivo · Buenos Aires',
    title: ['Cuerdas', 'en movimiento.'],
  },
  projects: [
    {
      name: '620 Trío',
      kind: 'Proyecto propio',
      genre: 'Fusión · Folclore · Jazz · Rock',
      detail: 'El simple “Muchos Colores” ya está publicado. Próximamente: el primer álbum, “Transporte Ideal”.',
      instagram: '#', // TODO: Reemplazar con el Instagram de 620 Trío.
      color: 'violet',
      art: '620',
    },
    {
      name: 'Matungo Ensamble',
      kind: 'Proyecto',
      genre: 'Funk · Jazz · Fusión',
      detail: 'Ensamble activo desde 2012, entre la energía rítmica y la improvisación.',
      instagram: '#', // TODO: Reemplazar con el Instagram de Matungo Ensamble.
      color: 'blue',
      art: 'MAT',
    },
    {
      name: 'Jero Santillán Grupo',
      kind: 'Colaboración',
      genre: 'Folclore · Jazz · Fusión',
      detail: 'Un proyecto de cruces sonoros al que Walter se suma frecuentemente como invitado.',
      instagram: '#', // TODO: Reemplazar con el Instagram de Jero Santillán Grupo.
      color: 'violet',
      art: 'JSG',
    },
  ],
  gallery: [
    { label: 'Show en vivo · 01', shape: 'wide' },
    { label: 'Show en vivo · 02', shape: 'tall' },
    { label: 'Show en vivo · 03', shape: 'square' },
    { label: 'Show en vivo · 04', shape: 'wide' },
    { label: 'Show en vivo · 05', shape: 'square' },
  ],
  media: {
    youtubeUrl: null as string | null, // TODO: Pegar aquí la URL completa del embed de YouTube.
    youtubeTitle: 'Walter Zelaya en vivo — video pendiente',
    instagramUrl: 'https://www.instagram.com/reel/REEL_ID/embed', // TODO: Reemplazar REEL_ID por un reel público.
  },
  spotify: [
    {
      label: 'Álbum',
      title: 'Andrés Alcoba – Walter Zelaya',
      href: 'https://open.spotify.com/album/5SufZDfpzkcDiH0H6FDhkq',
    },
    {
      label: 'Perfil de artista',
      title: 'Andrés Alcoba – Walter Zelaya',
      href: 'https://open.spotify.com/artist/1ySAFPJ6rySRxjvK2pTJcs',
    },
    {
      label: 'Álbum',
      title: 'Andrés Alcoba – Walter Zelaya',
      href: 'https://open.spotify.com/album/1j3n7mWhkFqOGkWUabe5OA',
    },
  ],
  shows: [
    {
      date: '17 SEP',
      dateLabel: '17 de septiembre',
      venue: 'Sheykobs',
      location: 'Palermo, Buenos Aires',
      project: 'Con Jero Santillán Grupo',
    },
  ],
  socials: [
    { label: 'Instagram', href: '#' }, // TODO: Reemplazar enlaces reales.
    { label: 'YouTube', href: '#' },
    { label: 'Spotify', href: '#' },
  ],
} as const;

export type Project = (typeof site.projects)[number];
