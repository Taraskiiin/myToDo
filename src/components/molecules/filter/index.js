import { FilterItem } from "../../atoms/filter-item";

const filter = ["all", "done", "unfinished"];

export const Filter = () => {
  const onClick = () => console.log("1");
  return (
    <ul className="w-1/3">
      {filter.map((label, index) => (
        <FilterItem
          key={index}
          label={label}
          active={false}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};