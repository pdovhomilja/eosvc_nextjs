import React, { useState } from "react";
import {
  ArrowRightOnRectangleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import { useSelector } from "react-redux";

function Sidebar() {
  const { name } = useSelector((state) => state.session);

  const [open, setOpen] = useState(false);

  function handleSignOut() {
    signOut();
  }
  return (
    <nav
      className={`bg-slate-900  justify-between h-full ${
        open ? "w-80" : "w-20"
      }`}
    >
      <div
        className={`flex items-center ${
          open ? "justify-end pr-5 " : "justify-center"
        } pt-2`}
      >
        <p
          className="text-white"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? (
            <ChevronLeftIcon className="w-6" />
          ) : (
            <ChevronRightIcon className="w-6" />
          )}
        </p>
      </div>
      <div
        className={`flex ${
          open
            ? "justify-start items-start gap-2  pl-2 flex-col"
            : "justify-center items-center gap-2 flex-col"
        } p-2 text-gray-400`}
      >
        {/* Menu Item Start */}

        <MenuItem icon="home" open={open} route={"/"} menuItem={"Dashboard"} />
        <MenuItem
          icon="userGroup"
          open={open}
          route={"/crm"}
          menuItem={"CRM"}
        />
        <MenuItem
          icon="server"
          open={open}
          route={"/projects"}
          menuItem={"Projekty"}
        />
        <MenuItem
          icon="lightBulb"
          open={open}
          route={"/secondBrain"}
          menuItem={"Second Brain"}
        />
        <MenuItem
          icon="user"
          open={open}
          route={"/employees"}
          menuItem={"Zaměstnanci"}
        />

        <MenuItem
          icon="documentCheck"
          open={open}
          route={"/invoice"}
          menuItem={"Fakturace"}
        />
        <MenuItem
          icon="documentChart"
          open={open}
          route={"/reports"}
          menuItem={"Reporty"}
        />
        <MenuItem
          icon="document"
          open={open}
          route={"/documents"}
          menuItem={"Documenty"}
        />
        <MenuItem
          icon="clipBoardDocument"
          open={open}
          route={"/databox"}
          menuItem={"Datová schránka"}
        />
        <MenuItem
          icon="clipBoardDocument"
          open={open}
          route={"/setup"}
          menuItem={"Číselníky"}
        />
        <MenuItem
          icon="academicCap"
          open={open}
          route={"/template"}
          menuItem={"Template"}
        />
        <MenuItem
          icon="academicCap"
          open={open}
          route={"/openAi"}
          menuItem={"OpenAi test"}
        />
        {/* Menu Item End */}
      </div>
      <div
        className={`flex ${
          open
            ? "justify-start items-start gap-2  pl-2 flex-col"
            : "justify-center items-center gap-2 flex-col"
        } p-2 text-gray-400`}
      >
        <div
          onClick={handleSignOut}
          className="w-full hover:bg-slate-700 hover:text-gray-200 hover:transition hover:duration-150 rounded-md mx-auto"
        >
          <div className="flex flex-row items-center mx-auto p-2">
            <div className="p-2">
              <ArrowRightOnRectangleIcon className="w-6 h-6" />
            </div>
            {open && <div>Odhlásit {`(${name})`}</div>}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
