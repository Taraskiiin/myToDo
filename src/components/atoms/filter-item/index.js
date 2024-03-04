import checkboxCheckedIcon from "../../../assets/checkbox-checked.svg";
import checkboxUncheckedIcon from "../../../assets/checkbox-unchecked.svg";

export const FilterItem = ({ label, active, onClick }) => {
  return (
    <li className="cursor-pointer flex gap-3 w-fit" onClick={onClick}>
      <img
        src={active ? checkboxCheckedIcon : checkboxUncheckedIcon}
        alt={active ? `${label} checked box` : `${label} unchecked box`}
        className="w-5"
      />
      <p className="text-gray-600 capitalize">{label}</p>
    </li>
  );
};
