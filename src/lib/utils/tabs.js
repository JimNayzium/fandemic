import { leagueID } from '$lib/utils/leagueInfo';

export const tabs = [
  {
    icon: 'home',
    label: 'Home',
    dest: '/',
  },
  {
    icon: 'local_fire_department',
    label: 'The I.F.F.',
    dest: '/iff',
  },
  // {
  //   icon: 'view_comfy',
  //   label: 'The I.F.F. (w/Sub-Menu)',
  //   nest: true,
  //   submenuId: 'sub_iff',
  //   children: [
  //     {
  //       icon: 'storage',
  //       label: 'I.F.F. Home',
  //       dest: '/iff',
  //     }
  //   ]
  // },
  {
    icon: 'local_fire_department',
    label: 'Matchups',
    dest: '/matchups',
  },
  {
    icon: 'swap_horiz',
    label: 'Trades & Waivers',
    dest: '/transactions',
  },
  {
    icon: 'article',
    label: 'Blog',
    dest: '/blog',
  },
  {
    icon: 'view_comfy',
    label: 'League Info',
    nest: true,
    submenuId: 'sub_league_info',
    children: [
      {
        icon: 'storage',
        label: 'I.F.F. Home',
        dest: '/iff',
      },
      {
        icon: 'storage',
        label: 'Rosters',
        dest: '/rosters',
      },
      {
        icon: 'groups',
        label: 'Managers',
        dest: '/managers',
      },
      {
        icon: 'leaderboard',
        label: 'Standings',
        dest: '/standings',
      },
      {
        icon: 'view_comfy',
        label: 'Drafts',
        dest: '/drafts',
      },
      {
        icon: 'emoji_events',
        label: 'Trophy Room',
        dest: '/awards',
      },
      {
        icon: 'military_tech',
        label: 'Records',
        dest: '/records',
      },
      {
        icon: 'history_edu',
        label: 'Constitution',
        dest: '/constitution',
      },
      {
        icon: 'sports_football',
        label: 'Go to Sleeper',
        dest: `https://sleeper.app/leagues/${leagueID}`,
      },
    ]
  },
  // {
  //   icon: 'lightbulb',
  //   label: 'Resources',
  //   dest: '/resources',
  // },
];