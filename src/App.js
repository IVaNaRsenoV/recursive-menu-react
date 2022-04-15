import React from "react";
import { Menu } from "antd";

const { SubMenu, Item } = Menu;

const data = [
  { fileName: "test1" },
  {
    fileName: "test2",
    items: [
      {
        fileName: "x",
      },
    ],
  },
  {
    fileName: "x",
    items: [
      {
        fileName: "test3",
        items: [{ fileName: "test4" }],
      },
      { fileName: "test5" },
    ],
  },
];

const recursiveMenu = (data) => {
  return data.map(({ fileName, items = [] }) => {
    console.log({ fileName, items });
    if (!items?.length) {
      return <Item key={Math.random()}>{fileName}</Item>;
    }

    return (
      <SubMenu key={Math.random()} title={fileName}>
        {recursiveMenu(items)}
      </SubMenu>
    );
  });
};

export const App = () => {
  return <Menu mode="inline">{recursiveMenu(data)}</Menu>;
};
