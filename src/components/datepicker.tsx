
import React, { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { SelectSingleEventHandler } from "react-day-picker";

interface DatePickerProps {
    date: Date | undefined;
    setDate: (date: Date | null) => void;
    placeholder: string;
  }

export  const DatePicker: React.FC<DatePickerProps> = ({ date, setDate, placeholder }) => (
    <Popover>
      <PopoverTrigger asChild className="bg-white hover:bg-slate-50 hover:text-black">
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate as SelectSingleEventHandler} 
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
  