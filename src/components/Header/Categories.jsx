import { useNewsFetch } from "../../context/NewsFetchProvider";
import { useState } from "react";

const Categories = () => {
  const { handleCategory } = useNewsFetch();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (e) => {
    const category = e.target.textContent;
    handleCategory(category);
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto mt-6">
      <ul
        className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base"
      >
        <li>
          <button
            onClick={(e) => handleClick(e)}
            className={selectedCategory === "General" ? "underline" : ""}
          >
            General
          </button>
        </li>
        <li>
          <button
            onClick={(e) => handleClick(e)}
            className={selectedCategory === "Business" ? "underline" : ""}
          >
            Business
          </button>
        </li>
        <li>
          <button
            onClick={(e) => handleClick(e)}
            className={selectedCategory === "Entertainment" ? "underline" : ""}
          >
            Entertainment
          </button>
        </li>
        <li>
          <button
            onClick={(e) => handleClick(e)}
            className={selectedCategory === "Health" ? "underline" : ""}
          >
            Health
          </button>
        </li>
        <li>
          <button
            onClick={(e) => handleClick(e)}
            className={selectedCategory === "Science" ? "underline" : ""}
          >
            Science
          </button>
        </li>
        <li>
          <button
            onClick={(e) => handleClick(e)}
            className={selectedCategory === "Sports" ? "underline" : ""}
          >
            Sports
          </button>
        </li>
        <li>
          <button
            onClick={(e) => handleClick(e)}
            className={selectedCategory === "Technology" ? "underline" : ""}
          >
            Technology
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
