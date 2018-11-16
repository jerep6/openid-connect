  let books = [
  {
    id: 1,
    title: "The Shining",
    author_id: 1,
    year: 1977,
    likes: 12000,
    user_id: "google-oauth2|117474865142876316691"
  },
  {
    id: 2,
    title: "Black House",
    author_id: 1,
    year: 2001,
    likes: 8700,
    user_id: "google-oauth2|117474865142876316691"
  },
  {
    id: 3,
    title: "Da Vinci Code",
    author_id: 2,
    year: 2003,
    likes: 130000,
    user_id: "google-oauth2|117474865142876316691"
  },
  {
    id: 4,
    title: "Angels & Demons",
    author_id: 2,
    year: 2000,
    likes: 98000,
    user_id: "google-oauth2|117474865142876316691"
  },
  {
    id: 5,
    title: "Deception Point",
    author_id: 2,
    year: 2001,
    likes: 56000,
    user_id: "google-oauth2|424242"
  },
  {
    id: 6,
    title: "Les Fourmis",
    author_id: 3,
    year: 1991,
    likes: 46800,
    user_id: "google-oauth2|424242"
  },
  {
    id: 7,
    title: "Le Jour des fourmis",
    author_id: 3,
    year: 1992,
    likes: 48300,
    user_id: "google-oauth2|424242"
  },
  {
    id: 8,
    title: "La Révolution des fourmis",
    author_id: 3,
    year: 1996,
    likes: 53000,
    user_id: "google-oauth2|424242"
  }
];

export async function list (userId: string) {
  return books.filter(b => b.user_id === userId);
};

export async function get(userId: string, bookId) {
  return books.filter(elt => elt.user_id === userId && elt.id == bookId)[0];
};

export async function deleteBooks() {
  books = [];
  return books;
};