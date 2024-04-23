"use client";

import React from "react";
import { TextField } from "../subframe/components/TextField";
import { Tabs } from "../subframe/components/Tabs";
import { ExploreFeatureCard } from "../subframe/components/ExploreFeatureCard";
import { IconWithBackground } from "../subframe/components/IconWithBackground";
import { ExploreCard } from "../subframe/components/ExploreCard";

function SearchPage() {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-center gap-4 bg-default-background pt-12 pr-6 pb-12 pl-6">
      <div className="flex w-full max-w-[768px] flex-col items-center gap-6">
        <div className="flex w-full max-w-[576px] flex-col items-center justify-center gap-6 pt-6 pr-6 pb-6 pl-6">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <img
              className="flex-none"
              src="https://res.cloudinary.com/subframe/image/upload/v1713889542/uploads/429/drayxzt3r3yvxnflbbpx.png"
            />
            <span className="w-full text-heading-1 font-heading-1 text-default-font text-center">
              Bern Dibner Library
            </span>
            <span className="text-body font-body text-subtext-color text-center">
              Look up books based on their titles, authors, content
            </span>
          </div>
          <TextField
            className="h-auto w-full flex-none"
            label=""
            helpText=""
            icon="FeatherSearch"
          >
            <TextField.Input placeholder="Search" />
          </TextField>
        </div>
        <div className="flex w-full flex-col items-center gap-12">
          <Tabs>
            <Tabs.Item active={true}>Most popular</Tabs.Item>
            <Tabs.Item>Articles and Databases </Tabs.Item>
          </Tabs>
          <div className="flex w-full flex-col items-center gap-16">
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="w-full text-heading-2 font-heading-2 text-default-font">
                  Librarian&#39;s picks
                </span>
                <span className="w-full text-body font-body text-subtext-color">
                  Curated selection of the books of the month
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full items-start gap-4">
                  <ExploreFeatureCard
                    image="https://res.cloudinary.com/subframe/image/upload/v1713888343/uploads/429/mvc9pwoyuormjhkf5vid.jpg"
                    title="The Secret at Shadow Ranch"
                    desc="Aided by her friends Bess Marvin and George Fayne, Nancy comes face-to-face with disaster when she is trapped inside a building that is toppled by a rockslide"
                    metadata="By Carolyn Keene"
                  />
                  <ExploreFeatureCard
                    image="https://res.cloudinary.com/subframe/image/upload/v1713888614/uploads/429/anxpiockjwjvpxb9wfvd.jpg"
                    title="The Hunt for Red October"
                    desc="Somewhere under the freezing Atlantic, a Soviet sub commander has just made a fateful decision. The Red October is heading west. The Americans want her. The Russians want her back. "
                    metadata="By Tom Clancy"
                  />
                </div>
                <div className="flex w-full items-start gap-4">
                  <ExploreFeatureCard
                    image="https://res.cloudinary.com/subframe/image/upload/v1713888715/uploads/429/w9t4h8lg7a97hrb3dmiu.jpg"
                    title="The Murder of Roger Ackroyd"
                    desc="The Murder of Roger Ackroyd, Agatha Christie’s 1926 detective fiction novel, is the fourth novel to feature the famous character Hercule Poirot and is the novel that propelled Christie’s career to new heights. "
                    metadata="By Agatha Christie"
                  />
                  <ExploreFeatureCard
                    image="https://res.cloudinary.com/subframe/image/upload/v1713888853/uploads/429/bhg8blbftss2zlrddywd.jpg"
                    title="If Tomorrow Comes"
                    desc="It is a story portraying an ordinary woman who is framed by the Mafia, her subsequent quest for vengeance towards them and her later life as a con artist. "
                    metadata="By Sidney Sheldon"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-4">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="w-full text-heading-2 font-heading-2 text-default-font">
                  Popular this week
                </span>
                <span className="w-full text-body font-body text-subtext-color">
                  Most checked out books in the last 7 days
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-1">
                <div className="flex w-full items-start gap-4">
                  <ExploreCard
                    count="1"
                    title="Introduction to Algorithms"
                    desc=""
                    metadata="By Cormen, Thomas H."
                  >
                    <IconWithBackground
                      variant="success"
                      size="large"
                      icon="FeatherBookA"
                    />
                  </ExploreCard>
                  <ExploreCard
                    count="2"
                    title="Making Embedded Systems"
                    desc=""
                    metadata="By Elecia White"
                  >
                    <IconWithBackground
                      variant="warning"
                      size="large"
                      icon="FeatherBookA"
                    />
                  </ExploreCard>
                </div>
                <div className="flex w-full items-start gap-4">
                  <ExploreCard
                    count="3"
                    title="TCP/IP Essentials: A Lab-Based Approach"
                    desc=""
                    metadata="By Shivendra S. Panwar, Shiwen Mao, Jeong-dong Ryoo, Yihan Li"
                  >
                    <IconWithBackground size="large" icon="FeatherBookA" />
                  </ExploreCard>
                  <ExploreCard
                    count="4"
                    title="Data Structures and Algorithms Made Easy: Data Structures and Algorithmic Puzzles"
                    desc=""
                    metadata="By Narasimha Karumanchi\n"
                  >
                    <IconWithBackground
                      variant="error"
                      size="large"
                      icon="FeatherBookA"
                    />
                  </ExploreCard>
                </div>
                <div className="flex w-full items-start gap-4">
                  <ExploreCard
                    count="5"
                    title="Algorithms"
                    desc=""
                    metadata="By Robert Sedgewick and Kevin Wayne"
                  >
                    <IconWithBackground
                      variant="neutral"
                      size="large"
                      icon="FeatherBookA"
                    />
                  </ExploreCard>
                  <ExploreCard
                    count="6"
                    title="Computer Systems: A Programmer's Perspective"
                    desc=""
                    metadata="By Randal Bryant"
                  >
                    <IconWithBackground size="large" icon="FeatherBookA" />
                  </ExploreCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;