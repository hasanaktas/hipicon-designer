import { cn } from "@/_utils";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";

type HeaderProps = {
  title: string;
  description: string;
  breadcrumbs: string[];
};

export const Header = ({ title, description, breadcrumbs }: HeaderProps) => {
  return (
    <div className="mx-auto w-full min-w-0">
      <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <React.Fragment key={index}>
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                {breadcrumb}
              </div>
              <ChevronRightIcon className="h-4 w-4" />
            </React.Fragment>
          );
        })}
        <div className="font-medium text-foreground">{title}</div>
      </div>
      <div className="space-y-2">
        <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
          {title}
        </h1>

        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      <div className="pb-12 pt-8">{/* <Mdx code={doc.body.code} /> */}</div>
      {/* <DocsPager doc={doc} /> */}
    </div>
  );
};
