import ToggleTheme from "@/features/light-dark-mode/components/ui/toggle-theme";

const Theme = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">Theme</p>
      <ToggleTheme />
    </div>
  );
};

export default Theme;
