"use client";
/*
 * Documentation:
 * Custom Component — https://app.subframe.com/library?component=Custom+Component_c90fe1a0-2e00-4bc7-b3d3-94f47d1e2e14
 * Table — https://app.subframe.com/library?component=Table_142dfde7-d0cc-48a1-a04c-a08ab2252633
 * Badge — https://app.subframe.com/library?component=Badge_97bdb082-1124-4dd7-a335-b14b822d0157
 * Dropdown Menu — https://app.subframe.com/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Icon Button — https://app.subframe.com/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 * Accordion — https://app.subframe.com/library?component=Accordion_d2e81e20-863a-4027-826a-991d8910efd9
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Table } from "./Table";
import { Badge } from "./Badge";
import { DropdownMenu } from "./DropdownMenu";
import { IconButton } from "./IconButton";
import { Accordion } from "./Accordion";

interface CustomComponentRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const CustomComponentRoot = React.forwardRef<
  HTMLElement,
  CustomComponentRootProps
>(function CustomComponentRoot(
  { children, className, ...otherProps }: CustomComponentRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex w-full flex-col items-start gap-4",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <Table
        header={
          <Table.HeaderRow>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
          </Table.HeaderRow>
        }
      >
        <Table.Row>
          <Table.Cell>
            <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
              John Walton
            </span>
          </Table.Cell>
          <Table.Cell>
            <span className="whitespace-nowrap text-body font-body text-neutral-500">
              john.walton@example.com
            </span>
          </Table.Cell>
          <Table.Cell>
            <Badge>Engineering</Badge>
          </Table.Cell>
          <Table.Cell>
            {children ? (
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <div className="flex w-full grow shrink-0 basis-0 items-center justify-end">
                    {children}
                  </div>
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="left"
                    align="center"
                    sideOffset={4}
                    asChild={true}
                  >
                    <DropdownMenu>
                      <DropdownMenu.DropdownItem icon="FeatherStar">
                        Favorite
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon="FeatherPlus">
                        Add
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon="FeatherEdit2">
                        Edit
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon="FeatherTrash">
                        Delete
                      </DropdownMenu.DropdownItem>
                    </DropdownMenu>
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
            ) : null}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
              Sarah Chandler
            </span>
          </Table.Cell>
          <Table.Cell>
            <span className="whitespace-nowrap text-body font-body text-neutral-500">
              sarah.chandler@example.com
            </span>
          </Table.Cell>
          <Table.Cell>
            <Badge variant="warning">Design</Badge>
          </Table.Cell>
          <Table.Cell>
            <div className="flex w-full grow shrink-0 basis-0 items-center justify-end">
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <IconButton size="medium" icon="FeatherMoreHorizontal" />
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="bottom"
                    align="end"
                    sideOffset={8}
                    asChild={true}
                  >
                    <DropdownMenu />
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <IconButton size="medium" icon="FeatherMoreHorizontal" />
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="bottom"
                    align="end"
                    sideOffset={8}
                    asChild={true}
                  >
                    <DropdownMenu />
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
            </div>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
              Susan Best
            </span>
          </Table.Cell>
          <Table.Cell>
            <span className="whitespace-nowrap text-body font-body text-neutral-500">
              susan.best@example.com
            </span>
          </Table.Cell>
          <Table.Cell>
            <Badge variant="success">Product</Badge>
          </Table.Cell>
          <Table.Cell>
            <div className="flex w-full grow shrink-0 basis-0 items-center justify-end">
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <IconButton size="medium" icon="FeatherMoreHorizontal" />
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="bottom"
                    align="end"
                    sideOffset={8}
                    asChild={true}
                  >
                    <DropdownMenu />
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
            </div>
          </Table.Cell>
        </Table.Row>
      </Table>
      <Accordion defaultOpen={true}>
        <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-2 pt-2 pr-3 pb-2 pl-3">
          <Table />
        </div>
      </Accordion>
    </div>
  );
});

export const CustomComponent = CustomComponentRoot;
