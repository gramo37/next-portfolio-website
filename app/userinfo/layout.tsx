import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/StaticForms/SideBarNav";
import ReactQueryProvider from "@/components/Providers";
import { Inter } from "next/font/google";

const sidebarNavItems: any = [
  {
    title: "User Info",
    key: "userinfo"
  },
  {
    title: "Education",
    key: "education"
  },
  {
    title: "Skills",
    key: "skills"
  },
  {
    title: "Projects",
    key: "projects"
  },
  {
    title: "Work Experience",
    key: "workexperience"
  },
];

const inter = Inter({ subsets: ["latin"] });

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="space-y-6 p-10 pb-16">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Portfolio Details</h2>
            <p className="text-muted-foreground">
              Manage your portfolio settings.
            </p>
          </div>
          <Separator className="my-6" />
          <ReactQueryProvider>
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
              <aside className="-mx-4 lg:w-1/4">
                <SidebarNav items={sidebarNavItems} />
              </aside>
              <div className="flex-1 lg:max-w-2xl">{children}</div>
            </div>
          </ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
