export interface NewBook {
  basic: BasicDetails;
  page_settings: PageSettings;
};

export interface BasicDetails {
  language: string;
  title: string;
  author: string;
  series: string;
  edition: string;
  description: string;
  publishing_rights: string;
  keywords: string;
  reading_age: string;
  genre: string;
};

export interface PageSettings {
  page_heigth: number;
  page_width: number;
  inner_margin: number;
  outer_margin: number;
  bottom_margin: number;
}
export interface Customer {
  name: string;
  languageSelector: {
    type: string;
    english: {
      english_font: string;
    },
    hindi: {
      english_font: string;
      hindi_font: string;
    },
    oriya: {
      english_font: string;
      oriya_font: string;
    }
  }
}
