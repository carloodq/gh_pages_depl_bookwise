import { useState } from "react";
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { useGeneratePrompt } from "./lib/mutations";
import { Spinner } from "./components/Spinner";
import "./App.css";
import { Prompt } from "./components/Prompt";

function App() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const { mutate, isLoading, isSuccess, data } = useGeneratePrompt();

  const handleSelectionOfNewCategory = (newCategory: string) => {
    if (selectedCategories.find((category) => category === newCategory)) {
      setSelectedCategories(
        [...selectedCategories].filter((cat) => cat !== newCategory)
      );
    } else {
      setSelectedCategories([...selectedCategories, newCategory]);
    }
  };

  const handleGenerateSuggestion = () => {
    if (!noGenresSelected)
      mutate({
        genres: selectedCategories,
        prompter: "Matteo",
      });
  };

  const noGenresSelected = selectedCategories.length === 0;

  return (
    <>
      <Header />
      <main className="mx-4 md:mx-auto mb-8 md:mb-0 max-w-screen-xl">
        <h1 className="mt-8 text-lg md:text-2xl">
          Select at least three of the following genres
        </h1>
        <Categories
          selectedCategories={selectedCategories}
          onSelectCategory={(category) =>
            handleSelectionOfNewCategory(category)
          }
        />
        <div className="mt-8 md:mt-16 flex justify-center items-center">
          <button
            disabled={noGenresSelected}
            onClick={handleGenerateSuggestion}
            className={`${
              noGenresSelected
                ? "bg-slate-300"
                : "bg-slate-500 hover:bg-slate-600"
            } text-white font-bold py-2 px-12 rounded`}
          >
            {isLoading ? <Spinner /> : "Submit"}
          </button>
        </div>
        {isSuccess && <Prompt promptData={data} />}
      </main>
    </>
  );
}

export default App;
