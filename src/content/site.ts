/**
 * Single source of editable content for this artist site.
 * To reuse this project for another artist, update this file and the assets in /public.
 */
export const site = {
  artist: {
    name: 'Walter Zelaya',
    role: 'Guitarrista · Buenos Aires',
    description: 'Guitarrista de Buenos Aires. Proyectos propios, colaboraciones y música en movimiento.',
    bio: 'Walter Zelaya es guitarrista y músico activo de la escena de Buenos Aires. Su recorrido se mueve entre la canción, el folclore, el jazz y las músicas de raíz latinoamericana.',
    // TODO: Reemplazar por una bio aprobada por el artista.
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
  socials: [
    { label: 'Instagram', href: '#' }, // TODO: Reemplazar enlaces reales.
    { label: 'YouTube', href: '#' },
    { label: 'Spotify', href: '#' },
  ],
} as const;

export type Project = (typeof site.projects)[number];
