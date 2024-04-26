"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../subframe/components/Button";
import { Tabs } from "../subframe/components/Tabs";
import { TextField } from "../subframe/components/TextField";
import { IconButton } from "../subframe/components/IconButton";


function BuildPage({onLogout}) {
  
  const [expandedRow, setExpandedRow] = useState(null);
  const navigate = useNavigate();
  const data = [
    { id: 1, name: 'John Walton', email: 'john.walton@example.com' },
    { id: 2, name: 'Sarah Chandler', email: 'sarah.chandler@example.com' },
    { id: 3, name: 'Susan Best', email: 'susan.best@example.com' },
  ];
  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-start gap-12 bg-default-background pt-12 pb-12">
      <div className="flex w-full flex-col items-start gap-6">

        <div className="flex w-full items-center gap-2">
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1">
            <span className="w-full text-heading-2 font-heading-2 text-default-font">
              Build Tracker
            </span>
            <span className="text-body font-body text-subtext-color">
              Track your builds here
            </span>
          </div>
          
          <Button variant="neutral-primary" onClick={onLogout} icon={null} iconRight={null}>
            Logout
          </Button>
        </div>
       
        <Tabs>
          <div className="flex items-center gap-2">
            <Tabs.Item onClick={() => navigate("/itemPage")} >Items</Tabs.Item>
            <Tabs.Item onClick={() => navigate("/buildPage")} active={true} >Build</Tabs.Item>
          </div>
        </Tabs>
       
      </div>
      <div className="flex w-full flex-col items-start gap-4">
        <div className="flex w-full items-center gap-2">
          <span className="w-full grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
            All time stats
          </span>
        </div>
        <div className="flex w-full items-start gap-4">
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-2 rounded border border-solid border-neutral-border pt-12 pr-12 pb-12 pl-12">
            <span className="text-heading-1 font-heading-1 text-default-font">
              12
            </span>
            <span className="text-body font-body text-subtext-color">
              Pending Builds
            </span>
          </div>
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-2 rounded border border-solid border-neutral-border pt-12 pr-12 pb-12 pl-12">
            <span className="text-heading-1 font-heading-1 text-default-font">
              10
            </span>
            <span className="text-body font-body text-subtext-color">
              Completed Builds
            </span>
          </div>
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-2 rounded border border-solid border-neutral-border pt-12 pr-12 pb-12 pl-12">
            <span className="text-heading-1 font-heading-1 text-default-font">
              4
            </span>
            <span className="text-body font-body text-subtext-color">
              Build Due
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center gap-2">
        <div className="flex w-full grow shrink-0 basis-0 items-center gap-6">
          <Button>Add build</Button>
          <TextField
            className="h-auto w-full grow shrink-0 basis-0"
            label=""
            helpText=""
            icon="FeatherSearch"
          >
            <TextField.Input placeholder="Search" />
          </TextField>
          <IconButton icon="FeatherFilter" />
        </div>
      </div>
      
      <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th scope="col" className="relative px-6 py-3">
            <span className="sr-only">Action</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" onClick={() => toggleRow(item.id)} className="text-indigo-600 hover:text-indigo-900">
                  {expandedRow === item.id ? 'Collapse' : 'Expand'}
                </a>
              </td>
            </tr>
            {expandedRow === item.id && (
              <tr>
                <td colSpan="3" className="px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {/* Your expanded content here */}
                    <p>Additional details for {item.name}...</p>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
    </div>
   
  );
}

export default BuildPage;