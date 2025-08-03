import Switch from "react-switch";

export default function BasicHooksExample(props: {
  onChange: () => void;
  checked: boolean;
  label: string;
  className?: string;
  switchClassName?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-2 ${props.className}`}
    >
      <label className="text-gray-600">{props.label}</label>
      <Switch
        onChange={props.onChange}
        checked={props.checked}
        className={`text-stone-500 ${props.switchClassName}`}
        handleDiameter={15}
        offColor="#79716b"
        onColor="#009966"
        offHandleColor="#e7e5e4"
        onHandleColor="#e7e5e4"
        height={22}
        width={40}
        borderRadius={999}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </div>
  );
}
