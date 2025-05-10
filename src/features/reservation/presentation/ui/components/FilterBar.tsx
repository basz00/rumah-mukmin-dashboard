import { Input } from "@/common/ui/components";

type Props = {
  label: string;
  onChange: (value: string) => void;
  value: string;
};

const FilterInput = ({ label, onChange, value }: Props) => {
  return (
    <form className="flex-col gap-2">
      <label>{label}</label>
      <div className="flex gap-2">
        <Input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </form>
  );
};

export default FilterInput;
