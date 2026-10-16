/**
 * Single source of editable content for this artist site.
 * To reuse this project for another artist, update this file and the assets in /public.
 */
export interface Show {
  date: string;
  dateLabel: string;
  venue: string;
  location?: string;
  project: string;
}

export const site = {
  artist: {
    name: 'Walter Zelaya',
    role: 'Guitarrista · Compositor · Arreglador',
    description: 'Walter Zelaya, guitarrista, compositor y arreglador argentino. Jazz, folklore de proyección y música en vivo.',
    bio: [
      'Egresado de la institución Leopoldo Marechal, Walter profundizó sus estudios de armonía e improvisación jazzística con Daniel Pellegrini, Pino Marrone y Néstor Gómez, entre otros. Estudió composición con Javier González y arreglos para secciones de vientos con Bernardo Vásquez y Valentín Reiners.',
      'Su trabajo como guitarrista, compositor y arreglador cruza el jazz argentino y el folklore de proyección. Acompañó proyectos de folklore y formó parte de grupos de jazz y fusión. Actualmente participa en Matungo Ensamble —proyecto de jazz rock con tres discos, donde trabajó como compositor y arreglador— y en 620 Trío, donde participó en la composición y los arreglos de “Transporte ideal”. Con Andrés Alcoba formó un dúo dedicado al folklore de proyección, con participación en la composición y los arreglos. También trabajó con Juan Enriquez en arreglos y producción musical.',
      'Participó en grabaciones junto a Leo Villagra, Leopoldo Deza y Juan Carlos Liendro, y compartió proyectos con Manolo Salguero y Jero Santillán. Con La Tríada, grupo instrumental junto a Marito y Nelson, tocó en formato de trío en el Festival de Baradero. Realizó giras por distintas provincias y se presentó en bares, teatros, televisión y streaming.',
    ],
    education: {
      institution: 'Leopoldo Marechal',
      namesToConfirm: ['Escuela de Arte Leopoldo Marechal', 'Conservatorio de Música Leopoldo Marechal'],
      confirmation: 'Confirmar con Walter cuál es la denominación institucional exacta; no asumir que son instituciones distintas ni equivalentes.',
    },
    email: 'walgerzel@gmail.com' as string | null,
    whatsappUrl: 'https://wa.me/5491161422171' as string | null,
  },
  features: {
    showProjectArtwork: false,
    showGallery: false,
  },
  hero: {
    eyebrow: 'Música en vivo · Buenos Aires',
    slogan: 'Cuerdas en movimiento',
  },
  projects: [
    {
      name: '620 Trío',
      kind: 'Proyecto propio',
      genre: 'Jazz argentino',
      detail: 'Walter participó en la composición y los arreglos de “Transporte ideal”.',
      links: [],
      color: 'violet',
      art: '620',
    },
    {
      name: 'Matungo Ensamble',
      kind: 'Proyecto',
      genre: 'Jazz rock',
      detail: 'Proyecto activo desde 2012, con tres discos. Walter también trabajó como compositor y arreglador.',
      links: [{ label: 'Escuchar “Pampa Shuffle” en Spotify', href: 'https://open.spotify.com/album/1j3n7mWhkFqOGkWUabe5OA' }],
      color: 'blue',
      art: 'MAT',
    },
    {
      name: 'De norte a oeste',
      kind: 'Disco solista',
      genre: 'Jazz argentino',
      detail: 'Un trabajo discográfico solista de Walter Zelaya.',
      links: [{ label: 'Escuchar en Spotify', href: 'https://open.spotify.com/album/5SufZDfpzkcDiH0H6FDhkq' }],
      color: 'blue',
      art: 'DNW',
    },
    {
      name: 'Andrés Alcoba – Walter Zelaya',
      kind: 'Dúo',
      genre: 'Folklore de proyección',
      detail: 'Un proyecto compartido con trabajo de ambos en composición y arreglos.',
      links: [],
      color: 'violet',
      art: 'A·W',
    },
    {
      name: 'Colaboraciones',
      kind: 'Arreglos · Producción · Grabaciones',
      genre: 'Trabajo con otros artistas',
      detail: 'Trabajó con Juan Enriquez en arreglos y producción musical. Participó en grabaciones junto a Leo Villagra, Leopoldo Deza y Juan Carlos Liendro.',
      links: [],
      color: 'blue',
      art: 'COL',
    },
    {
      name: 'Jero Santillán Grupo',
      kind: 'Colaboración',
      genre: 'Folklore · Jazz · Fusión',
      detail: 'Walter participa frecuentemente como invitado en este proyecto.',
      links: [],
      color: 'violet',
      art: 'JSG',
    },
    {
      name: 'La Tríada',
      kind: 'Proyecto instrumental',
      genre: 'Trío · Presentación en Baradero',
      detail: 'Junto a Marito y Nelson, Walter tocó como trío en el Festival de Baradero.',
      links: [],
      color: 'blue',
      art: 'TRI',
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
    instagramUrl: null as string | null, // Pendiente: agregar URL real de un reel si Walter quiere incluirlo.
  },
  spotify: [
    {
      label: 'Álbum',
      title: 'De norte a oeste',
      byline: 'Walter Zelaya · Jazz argentino',
      href: 'https://open.spotify.com/album/5SufZDfpzkcDiH0H6FDhkq',
    },
    {
      label: 'Perfil de artista',
      title: 'Walter Zelaya',
      byline: 'Perfil de artista en Spotify',
      href: 'https://open.spotify.com/artist/1ySAFPJ6rySRxjvK2pTJcs',
    },
    {
      label: 'Álbum',
      title: 'Pampa Shuffle',
      byline: 'Matungo Ensamble · Jazz rock',
      href: 'https://open.spotify.com/album/1j3n7mWhkFqOGkWUabe5OA',
    },
  ],
  shows: {
    upcoming: [
      {
        date: '2026-10-22',
        dateLabel: '22 OCT',
        venue: 'Tanque Cultural',
        project: 'Matungo Ensamble',
      },
      {
        date: '2026-11-25',
        dateLabel: '25 NOV',
        venue: 'Jazz Voyeur',
        project: '620 Trío',
      },
    ] as Show[],
    agendaNote: 'Próximas presentaciones confirmadas.',
  },
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/walter.zelaya.78/' as string | null },
    { label: 'YouTube', href: null as string | null },
    { label: 'Spotify', href: 'https://open.spotify.com/artist/1ySAFPJ6rySRxjvK2pTJcs' },
  ],
} as const;

export type Project = (typeof site.projects)[number];

export function isValidExternalUrl(value: string | null | undefined): value is string {
  if (!value) return false;

  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

export function isValidEmail(value: string | null | undefined): value is string {
  return Boolean(value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
}

/** Returns a privacy-enhanced embed URL only for recognized YouTube video URLs. */
export function toYouTubeEmbedUrl(value: string | null | undefined): string | null {
  if (!value) return null;

  try {
    const url = new URL(value);
    if (url.protocol !== 'https:') return null;

    const host = url.hostname.toLowerCase();
    const isShortDomain = host === 'youtu.be';
    const isYouTubeHost = ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(host);
    if (!isShortDomain && !isYouTubeHost) return null;

    let videoId: string | null = null;
    if (isShortDomain) {
      videoId = url.pathname.slice(1);
    } else if (url.pathname === '/watch') {
      videoId = url.searchParams.get('v');
    } else {
      videoId = url.pathname.match(/^\/(?:embed|shorts)\/([\w-]{11})\/?$/)?.[1] ?? null;
    }

    return videoId && /^[\w-]{11}$/.test(videoId)
      ? `https://www.youtube-nocookie.com/embed/${videoId}`
      : null;
  } catch {
    return null;
  }
}
