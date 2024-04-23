"use client";
/*
 * Documentation:
 * Onboarding Step Item — https://app.subframe.com/library?component=Onboarding+Step+Item_5334e65d-bf37-4414-9b40-4149896fd2ca
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface OnboardingStepItemRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  completed?: boolean;
  children?: string;
  icon?: SubframeCore.IconName;
  className?: string;
}

const OnboardingStepItemRoot = React.forwardRef<
  HTMLElement,
  OnboardingStepItemRootProps
>(function OnboardingStepItemRoot(
  {
    selected = false,
    completed = false,
    children,
    icon = "FeatherListChecks",
    className,
    ...otherProps
  }: OnboardingStepItemRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/5334e65d flex w-full cursor-pointer items-center gap-4 overflow-hidden rounded pt-3 pr-4 pb-3 pl-4 hover:bg-neutral-50",
        {
          "border-none": completed,
          "bg-brand-100 hover:bg-brand-100": selected,
        },
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <SubframeCore.Icon
        className={SubframeCore.twClassNames(
          "text-heading-3 font-heading-3 text-default-font",
          { "hidden text-subtext-color": completed, "text-brand-700": selected }
        )}
        name={icon}
      />
      <SubframeCore.Icon
        className={SubframeCore.twClassNames(
          "hidden text-body font-body text-white",
          {
            "inline-flex text-heading-3 font-heading-3 text-brand-700":
              completed,
            hidden: selected,
          }
        )}
        name="FeatherCheck"
      />
      {children ? (
        <span
          className={SubframeCore.twClassNames(
            "w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-subtext-color",
            { "text-default-font": completed, "text-brand-700": selected }
          )}
        >
          {children}
        </span>
      ) : null}
    </div>
  );
});

export const OnboardingStepItem = OnboardingStepItemRoot;
