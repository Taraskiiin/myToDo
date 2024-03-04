import checkboxCheckedIcon from "../../../assets/checkbox-checked.svg";
import checkboxUncheckedIcon from "../../../assets/checkbox-unchecked.svg";
import removeIcon from "../../../assets/remove-icon.svg";

export const TodoListItem = ({ label, done, onClick, onRemove }) => {
  return (
    <li
      className="cursor-pointer flex items-center gap-3 relative w-fit"
      onClick={onClick}
    >
      {done && (
        <div className="h-[2px] w-full absolute top-[calc(50%-1px)] left-0 bg-green-600" />
      )}
      <img
        src={done ? checkboxCheckedIcon : checkboxUncheckedIcon}
        alt={done ? `${label} done box` : `${label} unchecked box`}
        className="w-5"
      />
      <p className="text-gray-600">{label}</p>
      <span
        className="cursor-pointer flex justify-center items-center"
        onClick={onRemove}
      >
        <img src={removeIcon} alt="delete button" className="w-4" />
      </span>
    </li>
  );
};
