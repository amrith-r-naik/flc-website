import React, { useState } from "react";

import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "~/components/ui/select";

const teamNames = ["Team Alpha", "Team Beta", "Team Gamma"];
const Usn = ["REG001", "REG002", "REG003"];
const positions = ["Winner", "Runner-Up", "Second Runner-Up"];

const SlugPage: React.FC = () => {
  const [isSolo, setIsSolo] = useState(true);
  const [selectedTeamName, setSelectedTeamName] = useState<string | undefined>(
    undefined,
  );
  const [selectedRegNumber, setSelectedRegNumber] = useState<
    string | undefined
  >(undefined);
  const [selectedPosition, setSelectedPosition] = useState<string | undefined>(
    undefined,
  );

  const [winners, setWinners] = useState({
    winner: "",
    runnerUp: "",
    secondRunnerUp: "",
  });

  const toggleSoloTeam = () => {
    setIsSolo(!isSolo);
    setSelectedTeamName(undefined);
    setSelectedRegNumber(undefined);
  };

  const handleAddWinner = () => {
    const name = isSolo ? selectedRegNumber : selectedTeamName;

    if (!name || !selectedPosition) return;

    // Normalize position keys for consistent state updates
    const positionKey = selectedPosition
      .replace(" ", "")
      .replace("-", "")
      .toLowerCase();

    setWinners((prevWinners) => ({
      ...prevWinners,
      [positionKey]: name,
    }));

    // Clear selections
    setSelectedTeamName(undefined);
    setSelectedRegNumber(undefined);
    setSelectedPosition(undefined);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Add Winner</h1>

      <div className="grid gap-4 py-4">
        {/* Position Dropdown */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="position" className="text-right">
            Position
          </Label>
          <Select value={selectedPosition} onValueChange={setSelectedPosition}>
            <SelectTrigger className="p-2">
              <Button variant="outline">
                {selectedPosition ?? "Select Position"}
              </Button>
            </SelectTrigger>
            <SelectContent>
              {positions.map((position, index) => (
                <SelectItem key={index} value={position}>
                  {position}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Type Selector */}
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="type" className="text-right">
            Type
          </Label>
          <Button variant="outline" onClick={toggleSoloTeam}>
            {isSolo ? "Solo" : "Team"}
          </Button>
        </div>

        {/* Team Name Dropdown */}
        {!isSolo && (
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="team" className="text-right">
              Team Name
            </Label>
            <Select
              value={selectedTeamName}
              onValueChange={setSelectedTeamName}
            >
              <SelectTrigger>
                <Button variant="outline">
                  {selectedTeamName ?? "Select Team"}
                </Button>
              </SelectTrigger>
              <SelectContent>
                {teamNames.map((team, index) => (
                  <SelectItem key={index} value={team}>
                    {team}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Registration Number Dropdown */}
        {isSolo && (
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="reg-number" className="text-right">
              Registration Number
            </Label>
            <Select
              value={selectedRegNumber}
              onValueChange={setSelectedRegNumber}
            >
              <SelectTrigger>
                <Button variant="outline">
                  {selectedRegNumber ?? "Select Registration Number"}
                </Button>
              </SelectTrigger>
              <SelectContent>
                {Usn.map((reg, index) => (
                  <SelectItem key={index} value={reg}>
                    {reg}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Add Button */}
        <div className="flex justify-end">
          <Button onClick={handleAddWinner}>Add</Button>
        </div>

        {/* Results Table */}
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">Results</h2>
          <table className="w-full table-auto border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Position</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Winner</td>
                <td className="border border-gray-300 px-4 py-2">
                  {winners.winner}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Runner-Up</td>
                <td className="border border-gray-300 px-4 py-2">
                  {winners.runnerUp}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Second Runner-Up
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {winners.secondRunnerUp}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
