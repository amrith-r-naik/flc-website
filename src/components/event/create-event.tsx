"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { DatePicker } from "../datepicker";
import { EventCategory, EventState, EventType } from "@prisma/client";
import { Button } from "../ui/button";

interface FormValues {
  name: string;
  imgSrc?: string;
  deadline?: Date | undefined;
  fromDate: Date | undefined;
  toDate: Date | undefined;
  description?: string;
  venue?: string;
  type: EventType | "";
  minTeamSize: number | "";
  maxTeamSize: number | "";
  maxTeams: number | "";
  category: EventCategory | "";
  amount: number | "";
  state: EventState | "";
  isLegacy: boolean;
}

const CreateEvent: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    imgSrc: '',
    deadline: undefined,
    fromDate: undefined,
    toDate: undefined,
    description: '',
    venue: '',
    type: '',
    minTeamSize: '',
    maxTeamSize: '',
    maxTeams: '',
    category: '',
    amount: '',
    state: '',
    isLegacy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.FormEvent<HTMLButtonElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { id, value, type } = target;
    const checked = target.checked;
  
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [id]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value,
    }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };
  

  return (

    <Card className="mx-auto w-[70%] bg-[#4e5258] border-none shadow-md flex flex-col py-8">
      <CardContent className="flex-1 flex flex-col">

        <form className="flex-1 flex flex-col">
          <div className="flex flex-col w-full items-center gap-4 flex-1">

            <div className="flex flex-col space-y-1.5 w-full">
              <Label className="text-black-100 font-bold" htmlFor="name">
                Event name
              </Label>
              <Input
                className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400 hover:text-black"
                id="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Name of your event"
              />
            </div>

            <div className="flex flex-col space-y-1.5 w-full">
              <Label className="text-black-100 font-bold" htmlFor="imgSrc">
                Image Source (optional)
              </Label>
              <Input
                className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400 hover:text-black"
                id="imgSrc"
                value={formValues.imgSrc}
                onChange={handleChange}
                placeholder="Image URL"
              />
            </div>

            <div className="flex flex-col space-y-1.5 w-full">
              <Label className="text-white font-bold" htmlFor="deadline">
                Deadline (optional)
              </Label>
              <DatePicker
                date={formValues.deadline}
                setDate={(date) => handleSelectChange('deadline', date as unknown as string)}
                placeholder="Pick a deadline"
                
              />
            </div>

            <div className="flex space-x-4 w-full">
              <div className="flex flex-col space-y-1.5 w-full">
                <Label className="text-black-100 font-bold" htmlFor="fromDate">
                  From Date
                </Label>
                <DatePicker
                  date={formValues.fromDate}
                  setDate={(date) => handleSelectChange('fromDate', date as unknown as string)}
                  placeholder="Pick a from date"
                />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label className="text-black-100 font-bold" htmlFor="toDate">
                  To Date
                </Label>
                <DatePicker
                  date={formValues.toDate}
                  setDate={(date) => handleSelectChange('toDate', date as unknown as string)}
                  placeholder="Pick a to date"
                />
              </div>

            </div>

            <div className="flex flex-col space-y-1.5 flex-1 w-full">
              <Label className="text-black-100 font-bold" htmlFor="description">
                Description (optional)
              </Label>
              <Textarea
                className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400"
                id="description"
                value={formValues.description}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col space-y-1.5 w-full">
              <Label className="text-black-100 font-bold" htmlFor="venue">
                Venue (optional)
              </Label>
              <Input
                className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400 hover:text-black"
                id="venue"
                value={formValues.venue}
                onChange={handleChange}
                placeholder="Venue of your event"
              />
            </div>

            <div className="flex flex-col space-y-1.5 w-full">
              <Label className="text-black-100 font-bold" htmlFor="type">
                Type
              </Label>
              <Select
                value={formValues.type}
                onValueChange={(value) => handleSelectChange('type', value)}
              >
                <SelectTrigger className="bg-white text-slate-400" id="type">
                  <SelectValue className="text-slate-400" placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-white" position="popper">
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value={EventType.SOLO}>
                    Solo
                  </SelectItem>
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value={EventType.TEAM}>
                    Team
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex space-x-4 w-full">
              <div className="flex flex-col space-y-1.5 w-full">
                <Label className="text-black-100 font-bold" htmlFor="minTeamSize">
                  Min Team Size
                </Label>
                <Input
                  className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400 hover:text-black"
                  id="minTeamSize"
                  type="number"
                  value={formValues.minTeamSize}
                  onChange={handleChange}
                  placeholder="Minimum team size"
                />
              </div>

              <div className="flex flex-col space-y-1.5 w-full">
                <Label className="text-black-100 font-bold" htmlFor="maxTeamSize">
                  Max Team Size
                </Label>
                <Input
                  className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400 hover:text-black"
                  id="maxTeamSize"
                  type="number"
                  value={formValues.maxTeamSize}
                  onChange={handleChange}
                  placeholder="Maximum team size"
                />
              </div>

            </div>

            <div className="flex flex-col space-y-1.5 w-full">
              <Label className="text-black-100 font-bold" htmlFor="maxTeams">
                Max Teams
              </Label>
              <Input
                className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400 hover:text-black"
                id="maxTeams"
                type="number"
                value={formValues.maxTeams}
                onChange={handleChange}
                placeholder="Maximum number of teams"
              />
            </div>

            <div className="flex flex-col space-y-1.5 w-full">
              <Label className="text-black-100 font-bold" htmlFor="category">
                Category
              </Label>
              <Select
                value={formValues.category}
                onValueChange={(value) => handleSelectChange('category', value)}
              >
                <SelectTrigger className="bg-white text-slate-400" id="category">
                  <SelectValue className="text-slate-400" placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-white" position="popper">
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value={EventCategory.WORKSHOP}>
                    Workshop
                  </SelectItem>
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value={EventCategory.COMPETITION}>
                    Competition
                  </SelectItem>
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value={EventCategory.HACKATHON}>
                    Hackathon
                  </SelectItem>
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value={EventCategory.SPECIAL}>
                    Special
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5 w-full">
              <Label className="text-black-100 font-bold" htmlFor="amount">
                Amount
              </Label>
              <Input
                className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400 hover:text-black"
                id="amount"
                type="number"
                value={formValues.amount}
                onChange={handleChange}
                placeholder="Event amount"
              />
            </div>

            <div className="flex flex-col space-y-1.5 w-full">
              <Label className="text-black-100 font-bold" htmlFor="state">
                State
              </Label>
              <Select
                value={formValues.state}
                onValueChange={(value) => handleSelectChange('state', value)}
              >
                <SelectTrigger className="bg-white text-slate-400" id="state">
                  <SelectValue className="text-slate-400" placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-white" position="popper">
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value={EventState.DRAFT}>
                    Draft
                  </SelectItem>
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value={EventState.PUBLISHED}>
                    Published
                  </SelectItem>
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value={EventState.COMPLETED}>
                    Completed
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center space-x-2 w-full">
              <Checkbox
                id="isLegacy"
                checked={formValues.isLegacy}
                onChange={handleChange}
              />
              <Label className="text-black-100 font-bold" htmlFor="isLegacy">
                Is Legacy
              </Label>
            </div>
            
          </div>
        </form>
        <div className="flex justify-end">
          <Button variant="default" className="ml-auto"  >Create Event</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreateEvent;
