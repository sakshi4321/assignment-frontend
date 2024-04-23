"use client";

import React, { useState } from 'react';
import { Button } from "../subframe/components/Button";
import { HomeCard } from "../subframe/components/HomeCard";
import { ToggleGroup } from "../subframe/components/ToggleGroup";
import { DropdownMenu } from "../subframe/components/DropdownMenu";
import * as SubframeCore from "@subframe/core";
import { TextField } from "../subframe/components/TextField";
import { Table } from "../subframe/components/Table";
import { Badge } from "../subframe/components/Badge";
import { Accordion } from "../subframe/components/Accordion";

function PatientDetails() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="container max-w-none flex h-full w-full flex-col items-start gap-8 bg-default-background pt-12 pb-12">
      <div className="flex w-full items-center gap-2">
        <span className="w-full grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
          Patient Management System
        </span>
        <Button size="medium" icon="FeatherPlus" onClick={openModal}>
          Add Patient
        </Button>
        {isOpen && <PatientForm closeModal={closeModal} />}
      </div>
      <div className="flex w-full flex-col items-start gap-4">
        <span className="text-body-bold font-body-bold text-default-font">
          Current Statistics 
        </span>
        <div className="flex w-full items-start gap-4">
          <HomeCard
            title="Number of Patients"
            subtitle="54"
            icon="FeatherPersonStanding"
          />
          <HomeCard
            title="Critical Patients"
            subtitle="25"
            icon="FeatherActivity"
          />
          <HomeCard
            title="Scheduled Tests"
            subtitle="12"
            icon="FeatherTestTube2"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-4">
        <div className="flex w-full items-center gap-2 border-b border-solid border-neutral-border pt-2 pb-2">
          <span className="w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
            Patient Details
          </span>
          <ToggleGroup />
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild={true}>
              <Button
                variant="neutral-secondary"
                icon="FeatherArrowUpDown"
                iconRight="FeatherChevronDown"
              >
                Sort
              </Button>
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content
                side="bottom"
                align="start"
                sideOffset={4}
                asChild={true}
              >
                <DropdownMenu>
                  <DropdownMenu.DropdownItem icon={null}>
                    By name
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    By room number
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon={null}>
                    By Severity
                  </DropdownMenu.DropdownItem>
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
        </div>
        <TextField label="" helpText="" icon="FeatherSearch">
          <TextField.Input placeholder="Search" />
        </TextField>
        <Accordion
          trigger={
            <div className="flex w-full items-center gap-2 pt-2 pr-3 pb-2 pl-3">
              <span className="w-full grow shrink-0 basis-0 text-body font-body text-default-font">
                Jane Doe
              </span>
              <Button variant="neutral-primary">Discharge</Button>
              <Accordion.Chevron />
            </div>
          }
          defaultOpen={true}
        >
          <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-2 pt-2 pr-3 pb-2 pl-3">
            <Accordion defaultOpen={true}>
              <Table>
                <Table.Row className="h-auto w-96 flex-none">
                  <Table.Cell className="h-12 w-52 flex-none">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                      Room
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body font-body text-neutral-500">
                      34
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                      ID
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body font-body text-neutral-500">
                      234532
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                      Addictions
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Drug1, Drug2
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                      Severity
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="error">Critical</Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                      Doctor&#39;s comments
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body font-body text-neutral-500">
                      Patient needs to take medicine A daily
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table>
            </Accordion>
          </div>
        </Accordion>
        <Accordion
          trigger={
            <div className="flex w-full items-center gap-2 pt-2 pr-3 pb-2 pl-3">
              <span className="w-full grow shrink-0 basis-0 text-body font-body text-default-font">
                Jane Doe
              </span>
              <Button variant="neutral-primary">Discharge</Button>
              <Accordion.Chevron />
            </div>
          }
          defaultOpen={true}
        >
          <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-2 pt-2 pr-3 pb-2 pl-3">
            <Accordion defaultOpen={true}>
              <Table>
                <Table.Row className="h-auto w-96 flex-none">
                  <Table.Cell className="h-12 w-52 flex-none">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                      Room
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body font-body text-neutral-500">
                      12
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                      ID
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body font-body text-neutral-500">
                      199999
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                      Addictions
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Drug1, Drug2
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                      Severity
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge>Normal</Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                      Doctor&#39;s comments
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body font-body text-neutral-500">
                      Needs intermittent monitoring.               
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table>
            </Accordion>
          </div>
        </Accordion>
        <Accordion
          trigger={
            <div className="flex w-full items-center gap-2 pt-2 pr-3 pb-2 pl-3">
              <span className="w-full grow shrink-0 basis-0 text-body font-body text-default-font">
                Jane Doe
              </span>
              <Button variant="neutral-primary">Discharge</Button>
              <Accordion.Chevron />
            </div>
          }
          defaultOpen={true}
        >
          <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-2 pt-2 pr-3 pb-2 pl-3">
            <Accordion defaultOpen={true}>
              <Table>
                <Table.Row className="h-auto w-96 flex-none">
                  <Table.Cell className="h-12 w-52 flex-none">
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                      Room
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body font-body text-neutral-500">
                      56
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                      ID
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body font-body text-neutral-500">
                      232323
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                      Addictions
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-body font-body text-default-font">
                      Drug1,
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                      Severity
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Badge variant="error">Critical</Badge>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body-bold font-body-bold text-neutral-700">
                      Doctor&#39;s comments
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="whitespace-nowrap text-body font-body text-neutral-500">
                      Patient needs to take medicine A daily
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table>
            </Accordion>
          </div>
        </Accordion>
      </div>
      <Accordion defaultOpen={false}>
        <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-2 pt-2 pr-3 pb-2 pl-3">
          <span className="text-body font-body text-default-font">
            Accordion contents
          </span>
        </div>
      </Accordion>
    </div>
  );
}

function PatientForm({ closeModal }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send data to Lambda
    closeModal(); // Close the modal after form submission
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center overflow-y-auto">
  <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl transition duration-150 ease-in-out transform scale-95 hover:scale-100 mx-auto" style={{ width: '800px', maxWidth: '90%' }}>
    <h2 className="text-xl font-semibold mb-6 text-gray-800">Add New Patient</h2>
    <div className="mb-5">
      <label className="block text-gray-800 text-sm font-medium mb-2">
        Patient Name
      </label>
      <input type="text" name="name" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
    <div className="mb-5">
      <label className="block text-gray-800 text-sm font-medium mb-2">
        Addictions
      </label>
      <input type="text" name="addictions" className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
    </div>
    <div className="mb-6">
      <label className="block text-gray-800 text-sm font-medium mb-2">
        Severity
      </label>
      <select name="severity" className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
        <option value="">Select Severity</option>
        <option value="normal">Normal</option>
        <option value="critical">Critical</option>
      </select>
    </div>
    <div className="flex items-center justify-end space-x-4">
    <button type="button" onClick={closeModal} className="px-4 py-2 bg-red-300 hover:bg-red-400 text-white font-semibold rounded-lg shadow focus:outline-none focus:shadow-outline" style={{ minWidth: '100px' }}>
      Cancel
    </button>
    <button type="submit" className="px-4 py-2 bg-blue-300 hover:bg-blue-400 text-white font-semibold rounded-lg shadow focus:outline-none focus:shadow-outline" style={{ minWidth: '100px' }}>
      Add
    </button>
  </div>

  </form>
</div>
  );
}


export default PatientDetails;