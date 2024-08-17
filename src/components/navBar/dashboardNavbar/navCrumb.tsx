import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, type FunctionComponent } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

import { cn } from "~/lib/utils";

const NavCrumb: FunctionComponent<{ className?: string }> = ({ className }) => {
  const routes = useRouter().pathname.split("/").slice(1);

  return (
    <Breadcrumb className={cn(className, "hidden pl-4 md:flex")}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <Link href="/">Home</Link>
          </BreadcrumbPage>
        </BreadcrumbItem>
        {routes.length === 1 && routes[0]!.length === 0
          ? null
          : routes.map((route, idx) => {
              let newRoute = route.charAt(0).toUpperCase() + route.substring(1);

              // exceptions
              if (route === "cms") newRoute = "CMS";
              if (route === "upi") newRoute = "UPI";

              // slug routes with pattern /foo/bar/[slug] or /foo/bar/[slug]/foo
              if (idx > 1) {
                if (routes[idx - 1] === "sale")
                  if (routes.length - 1 === idx) newRoute = "View";
                  else return;
                if (routes[idx - 1] === "purchase")
                  if (routes.length - 1 === idx) newRoute = "View";
                  else return;
              }

              const href =
                idx !== routes.length - 1
                  ? "/" + routes.slice(0, idx + 1).join("/")
                  : null;

              return (
                <Fragment key={idx}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      {href ? <Link href={href}>{newRoute}</Link> : newRoute}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </Fragment>
              );
            })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default NavCrumb;
