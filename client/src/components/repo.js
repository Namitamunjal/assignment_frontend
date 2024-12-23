import React from "react";
import { Icon } from "@iconify/react"; // Import Iconify

const Repo = () => {
  return (
    <div className="h-screen w-64 bg-white border-r shadow-md flex flex-col">
      {/* Logo Section */}
      <div className="p-6 flex items-center space-x-2">
        <Icon icon="mdi:ant-outline" className="h-8 w-8 text-gray-800" />
        <span className="text-lg font-semibold text-gray-800">CodeAnt AI</span>
      </div>

      {/* Dropdown Section */}
      <div className="px-6">
        <select
          name="userSelection"
          id="userSelection"
          className="w-full border rounded-md p-2 text-gray-800"
        >
          <option value="utkarsh">UtkarshDhairyaP...</option>
          {/* Add more options here */}
        </select>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-col space-y-2 mt-6 px-6">
        {/* Repositories */}
        <a
          href="/"
          className="flex items-center space-x-3 py-2 px-3 rounded-md bg-blue-100 text-blue-600"
        >
          <Icon icon="mdi:home-outline" className="h-5 w-5" />
          <span className="font-medium">Repositories</span>
        </a>

        {/* AI Code Review */}
        <a
          href="/"
          className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-800 hover:bg-gray-100"
        >
          <Icon icon="mdi:code-braces" className="h-5 w-5" />
          <span className="font-medium">AI Code Review</span>
        </a>

        {/* Cloud Security */}
        <a
          href="/"
          className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-800 hover:bg-gray-100"
        >
          <Icon icon="mdi:cloud-outline" className="h-5 w-5" />
          <span className="font-medium">Cloud Security</span>
        </a>

        {/* How to Use */}
        <a
          href="/"
          className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-800 hover:bg-gray-100"
        >
          <Icon icon="mdi:help-circle-outline" className="h-5 w-5" />
          <span className="font-medium">How to Use</span>
        </a>

        {/* Settings */}
        <a
          href="/"
          className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-800 hover:bg-gray-100"
        >
          <Icon icon="mdi:cog-outline" className="h-5 w-5" />
          <span className="font-medium">Settings</span>
        </a>
      </nav>
    </div>
  );
};

export default Repo;
