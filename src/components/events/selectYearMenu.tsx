import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const getYearRange = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2016;
  const years = [];
  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }
  return years;
};

interface SelectYearMenuProps {
  onYearChange: (year: string) => void;
  defaultYear: string;
}
const SelectYearMenu: React.FC<SelectYearMenuProps> = ({
  onYearChange,
  defaultYear,
}) => {
  return (
    <>
      <Select onValueChange={onYearChange}>
        <SelectTrigger className="w-[180px] ">
          <SelectValue placeholder={defaultYear} />
        </SelectTrigger>
        <SelectContent>
          {getYearRange().map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectYearMenu;
