import checkboxCheckedIcon from "../../../assets/checkbox-checked.svg";
import checkboxUncheckedIcon from "../../../assets/checkbox-unchecked.svg";

export const TodoListItem = ({ label, done, onClick }) => {
  return (
    <li className="cursor-pointer flex gap-3 relative w-fit" onClick={onClick}>
      {done && (
        <div className="h-[2px] w-full absolute top-[calc(50%-1px)] left-0 bg-green-600" />
      )}
      <img
        src={done ? checkboxCheckedIcon : checkboxUncheckedIcon}
        alt={done ? `${label} done box` : `${label} unchecked box`}
        className="w-5"
      />
      <p className="text-gray-600">{label}</p>
    </li>
  );
};
