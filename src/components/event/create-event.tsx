"use client";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { DatePicker } from "../datepicker";


const CreateEvent = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    imgSrc: '',
    deadline: null,
    fromDate: null,
    toDate: null,
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

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSelectChange = (id, value) => {
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  return (
    <Card className="w-[50%] bg-[#686D76] border-none shadow-md flex flex-col py-8">
      <CardContent className="flex-1 flex flex-col">
        <form className="flex-1 flex flex-col">
          <div className="flex flex-col w-full items-center gap-4 flex-1">
            <div className="flex flex-col space-y-1.5 w-full">
              <Label className="text-black-100 font-bold" htmlFor="name">
                Event name
              </Label>
              <Input
                className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400"
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
                className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400"
                id="imgSrc"
                value={formValues.imgSrc}
                onChange={handleChange}
                placeholder="Image URL"
              />
            </div>
            <div className="flex flex-col space-y-1.5 w-full">
              <Label className="text-black-100 font-bold" htmlFor="deadline">
                Deadline (optional)
              </Label>
              <DatePicker
                date={formValues.deadline}
                setDate={(date) => handleSelectChange('deadline', date)}
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
                  setDate={(date) => handleSelectChange('fromDate', date)}
                  placeholder="Pick a from date"
                />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label className="text-black-100 font-bold" htmlFor="toDate">
                  To Date
                </Label>
                <DatePicker
                  date={formValues.toDate}
                  setDate={(date) => handleSelectChange('toDate', date)}
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
                className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400"
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
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value="SOLO">
                    Solo
                  </SelectItem>
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value="TEAM">
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
                  className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400"
                  id="minTeamSize"
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
                  className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400"
                  id="maxTeamSize"
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
                className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400"
                id="maxTeams"
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
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value="WORKSHOP">
                    Workshop
                  </SelectItem>
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value="COMPETITION">
                    Competition
                  </SelectItem>
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value="HACKATHON">
                    Hackathon
                  </SelectItem>
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value="SPECIAL">
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
                className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400"
                id="amount"
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
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value="DRAFT">
                    Draft
                  </SelectItem>
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value="PUBLISHED">
                    Published
                  </SelectItem>
                  <SelectItem className="bg-white hover:bg-slate-100 text-black" value="COMPLETED">
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
      </CardContent>
    </Card>
  );
};

export default CreateEvent;
