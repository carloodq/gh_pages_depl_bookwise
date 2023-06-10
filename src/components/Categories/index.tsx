import { categories } from "./const";

interface Props {
  onSelectCategory: (category: string) => void;
  selectedCategories: string[];
}

export const Categories: React.FC<Props> = ({
  selectedCategories,
  onSelectCategory,
}) => {
  return (
    <div className="mt-4 md:mt-8 grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-4">
      {categories.map((category) => {
        const isSelected = selectedCategories.find((cat) => cat === category);
        const isDisabled = selectedCategories.length === 3 && !isSelected;

        const backgroundColor = () => {
          if (isDisabled) {
            return "bg-blue-100";
          } else if (isSelected) {
            return "bg-blue-700";
          } else {
            return "bg-blue-300";
          }
        };

        return (
          <button
            disabled={isDisabled}
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`${backgroundColor()} ${
              isSelected ? "text-white" : "text-black"
            } flex justify-center items-center py-4 px-2 rounded-sm`}
          >
            <span>{category}</span>
          </button>
        );
      })}
    </div>
  );
};
