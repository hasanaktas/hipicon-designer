import { cn } from "@/_utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { Header } from "./_components/header";

const PanelPage = () => {
  return (
    <main className="relative py-6  ">
      <Header
        title="Erkin"
        description="Hasan"
        breadcrumbs={["Test1", "test2"]}
      />
    </main>
  );
};

export default PanelPage;
