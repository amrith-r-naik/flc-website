import React, { MouseEventHandler, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import ToggleSwitch from "~/components/toggleSwitch/ToggleSwitch";

interface SortingEventsProps {
  onSortOrderChange: (order: string) => void;
  onGroupByChange: (groupBy: string) => void;
  onSortByChange: (sortBy: string) => void;
  currentSortOrder: string;
}

const SortingEvents = ({
  onSortOrderChange,
  onGroupByChange,
  onSortByChange,
  currentSortOrder,
}: SortingEventsProps) => {
  const handleSwitch: MouseEventHandler<HTMLInputElement> = () => {
    const newOrder = currentSortOrder === "asc" ? "desc" : "asc";
    onSortOrderChange(newOrder);
  };
  return (
    <div className="mt-2 flex items-center justify-start gap-8 px-4 pt-4">
      <div className="font-inter flex items-center gap-2">
        <h1 className="text-xs sm:text-sm">group by</h1>
        <Select onValueChange={onGroupByChange}>
          <SelectTrigger className="w-[90px] sm:w-[120px]">
            <SelectValue placeholder="select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="year">year</SelectItem>
              <SelectItem value="type">type</SelectItem>
              <SelectItem value="category">category</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="font-inter flex items-center gap-2">
        <h1 className="text-xs sm:text-sm">sort by</h1>
        <Select onValueChange={onSortByChange}>
          <SelectTrigger className="w-[90px] sm:w-[120px]">
            <SelectValue placeholder="select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="name">name</SelectItem>
              <SelectItem value="no of participants">
                no of participants
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <ToggleSwitch
        onSwitch={handleSwitch}
        className="hidden sm:visible sm:block"
      />
    </div>
  );
};
export default SortingEvents;
