import AppLayout from "@/components/layouts";

import SettingLayout from "@/features/light-dark-mode/components/layouts";

import Theme from "@/features/light-dark-mode/components/ui/theme";

const AppearancePage = () => {
  return (
    <AppLayout>
      <SettingLayout>
        <div className="flex flex-col gap-6">
          <div className="space-y-0.5">
            <h4 className="text-xl font-semibold">Appearance</h4>
            <p className="text-sm font-normal text-muted-foreground max-[500px]:w-[70%]">
              Adjust themes and colors for a personalized experience.
            </p>
          </div>
          <Theme />
        </div>
      </SettingLayout>
    </AppLayout>
  );
};

export default AppearancePage;
