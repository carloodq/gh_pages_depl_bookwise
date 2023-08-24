import { Header } from "../Header";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSuggestNewBook } from "../../lib/mutations";
import { Suggestions } from "../Suggestions";
import { useGetBooks, useGetPromptInfo } from "../../lib/queries";
import { GoogleBook } from "../../interfaces";

interface FormFields {
  searchText: string;
}

const extractGenres = (input: string | string[] | undefined): string[] => {
  if (!input) return [];
  if (typeof input === "string")
    return input.replace(/[[\]']+/g, "").split(",");
  return input;
};

export const PromptPage = () => {
  // hooks
  const params = useParams<{ id: string }>();
  const promptId: string = params.id || "";

  // Form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormFields>();

  const watchedSearchText = watch("searchText");
  // actually the submit doesn't do anything
  const onSubmit: SubmitHandler<FormFields> = () => {
    return;
  };

  // Queries
  const { data: promptInfoData } = useGetPromptInfo(promptId);
  const { data: searchedBooks, isLoading: isLoadingGoogleBooks } =
    useGetBooks(watchedSearchText);

  const genres = extractGenres(promptInfoData?.data.genres);

  // handle action
  const { mutate, isLoading, isError } = useSuggestNewBook();

  const handleAddNewBook = (book: GoogleBook) => {
    mutate({
      author: book.volumeInfo.authors.toString(),
      isbn:
        book.volumeInfo.industryIdentifiers.find(
          (identifier) => identifier.type === "ISBN_13"
        )?.identifier || "",
      prompt_id: promptId,
      recommender: "",
      title: `${book.volumeInfo.title} - ${book.volumeInfo.subtitle}`,
    });
    reset();
  };

  return (
    <div>
      <Header />
      <main className="mx-4 md:mx-auto mb-8 md:mb-0 max-w-screen-xl">
        {/* Title */}
        <div className="mt-8 mb-4">
          <span>Genres: </span>
          {genres?.map((g, index) =>
            index === genres.length - 1 ? (
              <span key={g}>{g}</span>
            ) : (
              <span key={g}>{` ${g}, `}</span>
            )
          )}
        </div>
        {/* Form */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("searchText")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
            />
            {errors.searchText && <span>Error</span>}
          </form>
          {!!watchedSearchText &&
            (isLoadingGoogleBooks ? (
              <span>Loading...</span>
            ) : (
              <div className="px-4 pt-2 max-h-[300px] overflow-y-auto">
                {searchedBooks?.data.items.map((book) => (
                  <div
                    className="flex items-center mb-2 hover:cursor-pointer"
                    onClick={() => handleAddNewBook(book)}
                    key={book.id}
                  >
                    <div className="mr-2">
                      <img
                        src={book.volumeInfo.imageLinks?.thumbnail}
                        alt=""
                        width={30}
                        height={30}
                      />
                    </div>
                    <div>
                      <div>
                        <span className="text-md">{book.volumeInfo.title}</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">
                          {book.volumeInfo.authors}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
        {isLoading && <span>Loading...</span>}
        {isError && <span>Errors...</span>}
        <Suggestions promptId={promptId} />
      </main>
    </div>
  );
};
