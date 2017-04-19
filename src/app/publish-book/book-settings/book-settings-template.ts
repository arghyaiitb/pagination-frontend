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
  font_size = '';
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
        primary_font: 'Times New Roman',
        secondary_font: 'Comic MS'
      },
      font_size: '12'
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
        primary_font: 'Comic MS',
        secondary_font: 'Devnagric'
      },
      font_size: '12'
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
    book_dimension_template: 'Custom',
    book_dimension: {page_width: '10in', page_heigth: '6in'},
    language_font: {
      language: 'Oriya', font: {
        primary_font: 'Times New Roman',
        secondary_font: 'Oriya local font'
      },
      font_size: '8'
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
      header: 'Yes',
      footer: 'Yes'
    }
  },
  {
    book_dimension_template: 'Custom22',
    book_dimension: {page_width: '10in', page_heigth: '6in'},
    language_font: {
      language: 'hindi', font: {
        primary_font: 'Times New Roman',
        secondary_font: 'Oriya local font'
      },
      font_size: '8'
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
      header: 'Yes',
      footer: 'Yes'
    }
  }
];


export const languageAvailable = ['english', 'hindi', 'oriya', 'bengali'];
