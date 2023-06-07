import { Tab } from "@headlessui/react";
import { tx } from "@twind/core";
import { ITabsConfig } from "../Issues";

export const Tabs = ({ tabsConfig }: { tabsConfig: ITabsConfig[] }) => (
  <Tab.List className={tx("gap-4 flex overflow-auto")}>
    {tabsConfig.map((tag) => (
      <Tab className={tx("text-fg-default")}>
        {({ selected }) => (
          <>
            <section
              className={tx(
                "flex gap-2 items-center hover:bg-canvas-subtle px-2 py-1 rounded-md",
                selected && "border-b border-transparent"
              )}
            >
              <span className={tx("text-fg-muted")}>{tag.icon}</span>
              <span
                className={tx(
                  selected && "font-semibold",
                  "text-sm leading-none whitespace-nowrap"
                )}
              >
                {tag.title}
              </span>
              {tag.actions ?? null}
            </section>
            <div
              className={tx(
                selected && "bg-border-active rounded-lg",
                "h-[2px] mt-2 relative"
              )}
            />
          </>
        )}
      </Tab>
    ))}
  </Tab.List>
);
