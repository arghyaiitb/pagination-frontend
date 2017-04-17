export interface BasicDetails {
  title: string,
  author: string,
  series: string,
  edition: string,
  description: string,
  keywords: string,
  reading_age: string,
  genre: string,
  languageSelector: {
    type: string,
    english: {
      english_font: string
    },
    hindi: {
      english_font: string,
      hindi_font: string
    },
    oriya: {
      english_font: string,
      oriya_font: string
    }
  },
  publishing_rights: string
}
;
