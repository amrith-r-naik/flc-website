import React, { useState, useMemo, type FunctionComponent } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { api } from "~/utils/api";
import { DataTable } from "~/components/ui/custom/data-table";
import columns from "./coloums";
import { Input } from "~/components/ui/input";
import { FiSearch } from "react-icons/fi";

enum PaymentType {
  MEMBERSHIP = "MEMBERSHIP",
  EVENT = "EVENT",
}

const PaymentTable: FunctionComponent = () => {
  const [paymentType, setPaymentType] = useState<PaymentType | "ALL">("ALL");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [year, setYear] = useState<string>("ALL");

  const { data } = api.payment.getAllPayments.useQuery();
  const filteredData = useMemo(() => {
    return (
      data?.filter((payment) => {
        const matchesPaymentType =
          paymentType === "ALL" || payment.paymentType === paymentType;
        const matchesYear =
          year === "ALL" || new Date(payment.createdAt).getFullYear().toString() === year;
        const matchesSearchTerm =
          payment.paymentName.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesPaymentType && matchesYear && matchesSearchTerm;
      }) ?? []
    );
  }, [data, paymentType, year, searchTerm]);



  return (
    <div className="container mx-auto pb-10">
      <div className="flex gap-4 mb-4">
        <Select
          value={paymentType}
          onValueChange={(value) => setPaymentType(value as PaymentType | "ALL")}
        >
          <SelectTrigger className="w-44">
            <SelectValue placeholder="Payment Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">Payment Type</SelectItem>
            <SelectItem value={PaymentType.MEMBERSHIP}>Membership</SelectItem>
            <SelectItem value={PaymentType.EVENT}>Event</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={year}
          onValueChange={(value) => setYear(value)}
        >
          <SelectTrigger className="w-44">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">Year </SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
          </SelectContent>
        </Select>
        <div className="relative flex items-center">
          <FiSearch className="absolute left-3 text-gray-500" />
          <Input
            className="pl-10"
            placeholder="Search Payment Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <DataTable
        columns={columns}
        data={filteredData}
      />
    </div>
  );
};

export default PaymentTable;

