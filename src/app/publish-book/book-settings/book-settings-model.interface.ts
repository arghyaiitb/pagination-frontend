export interface BookPrintInfo {
  book_dimension_template: string,
  book_dimension: {
    page_width: string,
    page_heigth: string
  },
  language_font: {
    language: string,
    font: {
      primary_font: string,
      secondary_font: string
    }
  },
  margin: {
    top_margin: string,
    bottom_margin: string,
    inner_margin: string,
    outer_margin: string,
    line_spacing: string,
    paragraph_spacing: string
  },
  addons: {
    header: string,
    footer: string
  }
}
