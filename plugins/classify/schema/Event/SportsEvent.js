export default {
  name: 'SportsEvent',
  children: {},
  //
  categories: {
    mapping: [
      '1904 summer olympics events',
      '1900 summer olympics events',
      '2002 winter olympics events',
    ],
    patterns: [
      /. league seasons$/,
      /^(19|20)[0-9]{2} in (soccer|football|rugby|tennis|basketball|baseball|cricket|sports)/,
    ],
  },
  //
  descriptions: {
    patterns: [],
  },
  //
  infoboxes: {
    mapping: [
      'athletics_championships',
      'badminton_event',
      'boxingmatch',
      'fila_wrestling_event',
      'football_club_season',
      'football_country_season',
      'football_league_season',
      'football_match',
      'football_tournament_season',
      'little_league_world_series',
      'nba_season',
      'ncaa_baseball_conference_tournament',
      'ncaa_football_single_game',
      'ncaa_team_season',
      'nfl_season',
      'nfl_single_game',
      'sports_season',
      'tennis_event',
      'tennis_grand_slam_events',
      'wrestling_event',
      'football_tournament',
      'olympic_event',
      'international_football_competition',
      'wrestling_event',
      'sports_season',
      'cycling_race_report',
      'ncaa_team_season',
      'cricket_tournament',
      'football_match',
      'world_series_expanded',
      'mma_event',
      'nfl_season',
      'nfl_draft',
      'athletics_championships',
      'football_club_season',
      'canadian_football_game',
      'australian_rules_football_season',
      'football_tournament_season',
      'international_ice_hockey_competition',
      'cricket_tour',
    ],
    patterns: [],
  },
  //
  sections: {
    mapping: [],
    patterns: [],
  },
  //
  templates: {
    mapping: [],
    patterns: [],
  },
  //
  titles: {
    mapping: [],
    patterns: [],
  },
}
