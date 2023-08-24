export interface PromptInfo {
  genres: string;
  _id: {
    $oid: string;
  };
}

export interface PromptBook {
  _id: {
    $oid: string;
  };
  prompt_id: string;
  title: string;
  author: string;
  isbn: string;
  recommender: string;
}

export interface GoogleBook {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string; // "2022-03-16"
    description: string;
    industryIdentifiers: { type: string; identifier: string }[];
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount: number;
    printType: string;
    categories: string[];
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
}

export interface GoogleSuggestionData {
  kind: string;
  totalItems: number;
  items: GoogleBook[];
}
