import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'


const DropdownField = ({item, handleInputChange}) => {
  return (
    <div>
      <Select 
      onValueChange={(value) => handleInputChange(item.name, value)}
      required={item.required}
      >
        <SelectTrigger className="w-full">
            <SelectValue placeholder={item.label} />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            {
                item?.options?.map((option, index) => (
                    <SelectItem 
                    key={index}
                    value={option}>{option}</SelectItem>
                ))
            }
        </SelectContent>
      </Select>
    </div>
  )
}

export default DropdownField
