import { ScrollArea } from "@/_components/scroll-area";
import { DocsSidebarNav } from "./_components/sidebar-nav";
import { TopbarNav } from "./_components/topbar-nav";
import { Footer } from "./_components/footer";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <>
      <TopbarNav />

      <div className="border-b flex-1">
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
              <DocsSidebarNav
                items={[
                  {
                    title: "Urunler",
                    items: [
                      {
                        title: "Ekle",
                        href: "32",
                        items: [],
                      },
                      {
                        title: "Cikar",
                        href: "32",
                        items: [],
                      },
                    ],
                  },
                  {
                    title: "Urunler",
                    items: [
                      {
                        title: "Ekle",
                        href: "32",
                        items: [],
                      },
                      {
                        title: "Cikar",
                        href: "32",
                        items: [],
                      },
                    ],
                  },
                  {
                    title: "Urunler",
                    items: [
                      {
                        title: "Ekle",
                        href: "32",
                        items: [],
                      },
                      {
                        title: "Cikar",
                        href: "32",
                        items: [],
                      },
                    ],
                  },
                ]}
              />
            </ScrollArea>
          </aside>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
