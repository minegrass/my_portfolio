import React, { useState } from "react";
import { InferGetStaticPropsType } from "next";

type repoItem = {
  id: string;
  name: string;
  description: string;
  html_url: string;
};

export default function Projects() {
  const [repo, setRepo] = useState([]);
  const data = fetch("https://api.github.com/users/minegrass/repos")
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      setRepo(data);
    });

  return (
    <div id="projects" className="flex flex-col">
      <div className="text-4xl font-bold mx-5 mt-10">Projects</div>
      <div>
        <div className="flex justify-center text-3xl font-bold">
          Github Repos
        </div>
        <div className="px-10">
          <div className="grid grid-flow-col grid-cols-3 grid-rows-4 gap-3 m-5 items-center ">
            {repo.map((item: repoItem) => {
              return (
                <a href={item.html_url} key={item.id}>
                  <div className=" text-main-dark hover:outline outline-main-pink ease-in-out border-main-dark border-2 rounded-xl px-4 py-1 justify-center items-center flex flex-col shadow-md">
                    <div className="text-xl font-bold">{item.name}</div>
                    <div className="text-sm text-center text-main-dark bg-main-white font-bold p-2 rounded-xl border-l-2 border-b-2 border-main-pink m-2">
                      {item.description || "No description.."}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
