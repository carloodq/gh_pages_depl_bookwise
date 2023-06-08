import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";

function App() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSelectionOfNewCategory = (newCategory: string) => {
    if (selectedCategories.find((category) => category === newCategory)) {
      setSelectedCategories(
        [...selectedCategories].filter((cat) => cat !== newCategory)
      );
    } else {
      setSelectedCategories([...selectedCategories, newCategory]);
    }
  };

  return (
    <>
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <h1 className="mt-8 text-2xl">
          Select at least three of the following genres
        </h1>
        <Categories
          selectedCategories={selectedCategories}
          onSelectCategory={(category) =>
            handleSelectionOfNewCategory(category)
          }
        />
      </main>
    </>
  );
}

export default App;
