import { useGetPromptBooks } from "../../lib/queries";

const prettifyTitle = (title: string) => {
  const titleStrings = title.split("-");

  if (titleStrings[1].includes("undefined")) {
    return titleStrings[0];
  }
  return `${titleStrings[0]} - ${titleStrings[1]}`;
};

export const Suggestions: React.FC<{ promptId: string }> = ({ promptId }) => {
  const { data } = useGetPromptBooks(promptId);
  const books = data?.data;

  return (
    <div className="md:grid md:grid-cols-3 md:gap-4 mt-4">
      {books?.map((book) => (
        <div key={book.isbn} className="bg-slate-200 p-2">
          <div>
            <span className="text-xl">{prettifyTitle(book.title)}</span>
          </div>
          <div>
            <span>{book.author}</span>
          </div>
          <div>
            <span className="text-sm text-gray-500">ISBN: {book.isbn}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
