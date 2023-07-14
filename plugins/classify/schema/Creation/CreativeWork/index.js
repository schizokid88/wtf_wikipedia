import Album from './Album.js'
import Book from './Book.js'
import Film from './Film.js'
import TVShow from './TVShow.js'
import Play from './Play.js'
import Song from './Song.js'
import VideoGame from './VideoGame.js'

export default {
  name: 'CreativeWork',
  children: {
    Album,
    Book,
    Film,
    TVShow,
    Play,
    Song,
    VideoGame,
  },
  //
  categories: {
    mapping: [
      'operas',
      'american science fiction novels',
      'broadway musicals',
      'debut novels',
      'the twilight zone (1959 tv series) episodes',
      'united states national recording registry recordings',
      'macos games',
      'virtual console games for wii u',
      'american monthly magazines',
      'broadway plays',
      'interactive achievement award winners',
      'doubleday (publisher) books',
      '19th-century classical composers',
      'film soundtracks',
      'universal deluxe editions',
      'best picture academy award winners',
      'shōnen manga',
      'west end musicals',
      'sequel novels',
      'dystopian novels',
      'american comic strips',
      'american road movies',
      'chemical elements',
      'amstrad cpc games',
      'neo-noir',
      'fiction with unreliable narrators',
      'best drama picture golden globe winners',
      'adventure anime and manga',
    ],
    patterns: [],
  },
  //
  descriptions: {
    patterns: [],
  },
  //
  infoboxes: {
    mapping: [
      'artwork',
      'book_series',
      'broadcast',
      'comic_book_title',
      'comic_strip',
      'doctor_who_episode',
      'hollywood_cartoon',
      'magazine',
      'musical',
      'musical_composition',
      'opera',
      'painting',
      'radio_show',
      'song',
      'song_contest_entry',
      'television_episode',
      'television_season',
      'treaty',
      'video_game',
      'anthem',
      'television_episode',
      'comic_book_title',
      'song_contest_entry',
      'short_story',
      'hollywood_cartoon',
      'radio_show',
      'simpsons_episode',
      'musical_composition',
      'book_series',
      'comic_strip',
      'television_season',
      'comics_organization',
      'doctor_who_episode',
      'animanga/other',
      'graphic_novel',
      'rpg',
      'big_finish',
      'vg_series',
      'name_module',
      'comics_story_arc',
      'video_game_series',
      'futurama_episode',
      'comics_character_and_title',
      'comics_meta_series',
      'webcomic',
      'the_goodies_episode',
      'audio_drama',
      'sw_comics',
      'media_franchise',
      'folk_tale',
    ],
    patterns: [],
  },
  //
  sections: {
    mapping: [
      'plot',
      'reception',
      'charts',
      'release',
      'plot summary',
      'gameplay',
      'characters',
      'box office',
      'accolades',
      'soundtrack',
      'adaptations',
      'synopsis',
      'home media',
      'weekly charts',
      'themes',
      'publication history',
      'filming',
      'year-end charts',
      'casting',
      'release and reception',
      'commercial performance',
      'composition',
      'album',
      'setting',
      'chart positions',
      'release history',
      'charts and certifications',
      'sequels',
      'chart performance',
      'sequel',
      'recordings',
      'story',
      'editions',
      'in other media',
    ],
    patterns: [],
  },
  //
  templates: {
    mapping: [
      'rating',
      'certification table entry',
      'albumchart',
      'music',
      'album ratings',
      'album chart',
      'singles',
      'isbnt',
      'singlechart',
      'tcmdb title',
      'mojo title',
      'based on',
      'amg movie',
      'duration',
    ],
    patterns: [/-song-stub$/],
  },
  //
  titles: {
    mapping: [
      'season 2',
      'season 3',
      'season 4',
      'season 5',
      'the twilight zone',
      'ballet',
      'magazine',
      'miniseries',
      'music',
      'opera',
      'painting',
      'series',
      'single',
      'song',
      'soundtrack',
      'ep',
      'comics',
      'musical',
      'manga',
      'star trek: the next generation',
      'star trek: deep space nine',
      'buffy the vampire slayer',
      'angel',
      'the outer limits',
      'star trek: voyager',
      'short story',
      'seinfeld',
      'star trek: enterprise',
      'poem',
      'tv',
      'uk series',
      'doctor who',
      'david bowie song',
      'caravaggio',
      'the beach boys song',
      'video',
      'audio drama',
      'babylon 5',
      'madonna song',
    ],
    patterns: [/ \((.*? )song\)$/],
  },
}
