import { useGetPromptBooks } from "../../lib/queries";

export const Suggestions: React.FC<{ promptId: string }> = ({ promptId }) => {
  const { data } = useGetPromptBooks(promptId);
  const books = data?.data;

  return (
    <div className="md:grid md:grid-cols-3 md:gap-4 mt-4">
      {books?.map((book) => (
        <div key={book.isbn} className="bg-slate-200 p-2">
          <div>
            <span className="text-xl">{book.title}</span>
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
