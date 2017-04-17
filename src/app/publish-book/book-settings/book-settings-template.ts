export class BookSettings {
  book_dimension_template = '';
  book_dimension: BookDimensions;
  language_font: LanguageFont;
  margin: MarginSettings;
  addons: AdditionalFeatures;
}

export class BookDimensions {
  page_width = '';
  page_heigth = '';
}

export class LanguageFont {
  language = '';
  font: Font;
}

export class Font {
  primary_font = '';
  secondary_font = '';
}

export class MarginSettings {
  top_margin = '';
  bottom_margin = '';
  inner_margin = '';
  outer_margin = '';
  line_spacing = '';
  paragraph_spacing = '';
}

export class AdditionalFeatures {
  header = '';
  footer = '';
}

export const templates: BookSettings[] = [
  {
    book_dimension_template: '8x6in',
    book_dimension: {page_width: '6in', page_heigth: '8in'},
    language_font: {
      language: 'english', font: {
        primary_font: 'ENGLISH',
        secondary_font: 'HINDI'
      }
    },
    margin: {
      top_margin: '0.625in',
      bottom_margin: '0.625in',
      inner_margin: '0.625in',
      outer_margin: '0.625in',
      line_spacing: '3em',
      paragraph_spacing: '4em'
    },
    addons: {
      header: 'testing',
      footer: 'testing'
    }
  },

  {
    book_dimension_template: '12x9in',
    book_dimension: {page_width: '9in', page_heigth: '12in'},
    language_font: {
      language: 'bengali', font: {
        primary_font: 'ENGLISH',
        secondary_font: 'HINDI'
      }
    },
    margin: {
      top_margin: '0.625in',
      bottom_margin: '0.625in',
      inner_margin: '0.625in',
      outer_margin: '0.625in',
      line_spacing: '3em',
      paragraph_spacing: '4em'
    },
    addons: {
      header: 'testing',
      footer: 'testing'
    }
  }
];


export const languageAvailable = ['english', 'hindi', 'oriya', 'bengali'];
