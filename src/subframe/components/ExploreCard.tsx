"use client";

import React from "react";
import * as SubframeCore from "@subframe/core";

interface ExploreCardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: string;
  title?: string;
  desc?: string;
  metadata?: string;
  children?: React.ReactNode;
  className?: string;
}

const ExploreCardRoot = React.forwardRef<HTMLElement, ExploreCardRootProps>(
  function ExploreCardRoot(
    {
      count,
      title,
      desc,
      metadata,
      children,
      className,
      ...otherProps
    }: ExploreCardRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeCore.twClassNames(
          "group/bca37f79 flex h-full w-full cursor-pointer items-center gap-2 rounded pt-4 pr-4 pb-4 pl-4 hover:bg-neutral-50",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {count ? (
          <span className="w-8 flex-none text-heading-3 font-heading-3 text-default-font text-center">
            {count}
          </span>
        ) : null}
        <div className="flex w-full grow shrink-0 basis-0 items-center gap-4">
          {children ? (
            <div className="flex items-center gap-4">{children}</div>
          ) : null}
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4">
            <div className="flex w-full flex-col items-start gap-1">
              {title ? (
                <span className="w-full text-body-bold font-body-bold text-default-font">
                  {title}
                </span>
              ) : null}
              {desc ? (
                <span className="line-clamp-2 w-full text-caption font-caption text-default-font">
                  {desc}
                </span>
              ) : null}
            </div>
            {metadata ? (
              <span className="w-full text-caption font-caption text-subtext-color">
                {metadata}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
);

export const ExploreCard = ExploreCardRoot;