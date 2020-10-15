import React from "react";

export interface ISearchProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}
