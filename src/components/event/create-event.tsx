import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const CreateEvent = () => {
  return (
    <Card className="w-[50%] bg-[#686D76] border-none shadow-md flex flex-col py-8">
    <CardContent className="flex-1 flex flex-col">
      <form className="flex-1 flex flex-col">
        <div className="flex flex-col w-full items-center gap-4 flex-1">
          <div className="flex flex-col space-y-1.5 w-full">
            <Label
              className="text-black-100 font-bold "
              htmlFor="productName"
            >
              Event name
            </Label>
            <Input
              className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400"
              id="productName"
              placeholder="Name of your product"
              /* value={formValues.productName}
              onChange={handleChange} */
            />
          </div>
          <div className="flex flex-col space-y-1.5 w-full">
            <Label className="text-black-100 font-bold " htmlFor="category">
              Category
            </Label>
            <Input
              className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400"
              id="category"
              placeholder="Category of your product"
              /* value={formValues.category}
              onChange={handleChange} */
            />
          </div>
          <div className="flex flex-col space-y-1.5 w-full">
            <Label className="text-black-100 font-bold " htmlFor="brand">
              Brand
            </Label>
            <Select
             /*  value={formValues.brand}
              onValueChange={(value) => handleChange(value)} */
            >
              <SelectTrigger className="bg-white text-slate-400" id="brand">
                <SelectValue
                  className="text-slate-400"
                  placeholder="Select"
                />
              </SelectTrigger>
              <SelectContent className="bg-white" position="popper">
                <SelectItem
                  className="bg-white hover:bg-slate-100 text-black"
                  value="lays"
                >
                  Lays
                </SelectItem>
                <SelectItem
                  className="bg-white hover:bg-slate-100 text-black"
                  value="kurkure"
                >
                  Kurkure
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5 flex-1 w-full">
            <Label
              className="text-black-100 font-bold "
              htmlFor="description"
            >
              Description
            </Label>
            <Textarea
              className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400"
              id="description"
              /* value={formValues.description}
              onChange={handleChange} */
            />
          </div>
          <div className="flex space-x-4 w-full">
            <div className="flex flex-col space-y-1.5 w-full">
              <Label
                className="text-black-100 font-bold"
                htmlFor="currentPrice"
              >
                Current Price
              </Label>
              <Input
                className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400"
                id="currentPrice"
                placeholder="Current price of your product"
               /*  value={formValues.currentPrice}
                onChange={handleChange} */
              />
            </div>
            <div className="flex flex-col space-y-1.5 w-full">
              <Label
                className="text-black-100 font-bold"
                htmlFor="discountedPrice"
              >
                Discounted Price
              </Label>
              <Input
                className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400"
                id="discountedPrice"
                placeholder="Discounted price of your product (optional)"
                /* value={formValues.discountedPrice}
                onChange={handleChange} */
              />
            </div>
          </div>
          <div className="flex space-x-4 w-full">
            <div className="flex flex-col space-y-1.5 w-full">
              <Label className="text-black-100 font-bold" htmlFor="weight">
                Weight
              </Label>
              <Input
                className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400"
                id="weight"
                placeholder="Weight of your product"
                /* value={formValues.weight}
                onChange={handleChange} */
              />
            </div>
            <div className="flex flex-col space-y-1.5 w-full">
              <Label className="text-black-100 font-bold " htmlFor="stock">
                Stock
              </Label>
              <Input
                className="bg-white text-black font-normal focus:bg-white focus-visible:border-slate-400"
                id="stock"
                placeholder="Stock of your product"
                /* value={formValues.stock}
                onChange={handleChange} */
              />
            </div>
          </div>
        </div>
      </form>
    </CardContent>
  </Card>
  )
}

export default CreateEvent