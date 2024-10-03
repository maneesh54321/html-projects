import React from "react";

export interface Menu {
  title: String;
  menuItems: String[];
}

export interface HeaderMenu {
  title: String;
  menuItems: String[];
  heroMenu: Menu;
  menuList: Menu[];
}

const SubMenu = (props: HeaderMenu) => {
  return (
    <>
      <menu className="flex">
        <div>
          <h5>{props.heroMenu.title}</h5>
          <ul>
            {props.heroMenu.menuItems.map((item) => (
              <li>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        {props.menuList.map((m) => (
          <div>
            <h5>{m.title}</h5>
            <ul>
              {m.menuItems.map((item) => (
                <li>
                  <a>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </menu>
    </>
  );
};

export default SubMenu;
