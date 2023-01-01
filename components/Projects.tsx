import React, { useEffect, useState } from "react";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Leftchev from "./icons/leftchev";
import Rightchev from "./icons/rightchev";

type repoItem = {
  id: string;
  name: string;
  description: string;
  html_url: string;
};
type repoGroup = [repoItem, repoItem, repoItem, repoItem];
function restructArray(arr: any) {
  const restructured = [];
  while (arr.length > 0) {
    restructured.push(arr.splice(0, 4));
  }
  return restructured;
}

export default function Projects() {
  const [repo, setRepo] = useState<repoGroup[]>([]);
  const [visibleNo, setVisibleNo] = useState(0);
  const [repoAmount, setRepoAmount] = useState(0);
  fetch("https://api.github.com/users/minegrass/repos")
    .then((data) => data.json())
    .then((result) => {
      setRepoAmount(result.length);
      setRepo(restructArray(result));
    });
  const nextRepo = () => {
    setVisibleNo((prev) => {
      if (prev >= repo.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };
  const backRepo = () => {
    setVisibleNo((prev) => {
      if (prev <= 0) {
        return repo.length - 1;
      }
      return prev - 1;
    });
  };

  return (
    <>
      <div id="projects" className="flex flex-col relative mb-16">
        <div>
          <div className="flex flex-col gap-y-5 justify-center text-3xl font-bold items-center">
            <div className="block text-4xl font-bold">Projects</div>
            <div className="flex-row flex">
              <div className="px-2 py-1 bg-main-dark text-main-white rounded-full mx-2 text-center">
                {repoAmount}
              </div>
              Github Repos
            </div>
          </div>

          <div className="px-10">
            <div className="flex flex-row">
              {repo.map((group, index) => {
                return (
                  <div
                    key={index}
                    className={`flex-shrink-0 grid grid-flow-col grid-cols-2 grid-rows-2 gap-3 m-5 items-center self-center animation-grow-down ${
                      visibleNo == index ? "block" : "hidden"
                    } `}
                  >
                    {group.map((item, index) => {
                      return (
                        <div key={index}>
                          <a href={item.html_url} key={item.id}>
                            <div className=" text-main-dark hover:outline outline-main-pink ease-in-out border-main-dark border-2 rounded-xl px-4 py-1 justify-center items-center flex flex-col shadow-md">
                              <div className="text-xl font-bold">
                                {item.name}
                              </div>
                              <div className="text-sm text-center text-main-dark bg-main-white font-bold p-2 rounded-xl border-l-2 border-b-2 border-main-pink m-2">
                                {item.description || "No description.."}
                              </div>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-x-3 items-center justify-center">
          <button
            className="hover:opacity-100 p-0.5 shadow-md bg-main-pink border-r-2 border-b-2 border-main-dark opacity-70 rounded-full text-white "
            onClick={backRepo}
          >
            <Leftchev />
          </button>
          {Array(repo.length)
            .fill(0)
            .map((_, i) => {
              const size = 0.4 + i * 0.1;
              return (
                <div
                  onClick={() => {
                    setVisibleNo(i);
                  }}
                  key={i}
                  style={{ height: `${size}rem`, width: `${size}rem` }}
                  className={`${
                    visibleNo == i ? "bg-main-pink" : "bg-main-dark"
                  } rounded-full hover:cursor-pointer`}
                ></div>
              );
            })}
          <button
            className="hover:opacity-100 p-0.5 shadow-md border-r-2 border-b-2 border-main-dark bg-main-pink opacity-70 rounded-full text-white"
            onClick={nextRepo}
          >
            <Rightchev />{" "}
          </button>
        </div>
      </div>
    </>
  );
}
