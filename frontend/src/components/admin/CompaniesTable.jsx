import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'

const CompaniesTable = () => {
  return (
    <div>
     <Table>
        <TableCaption>List of your recent registered companies</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Logo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
            <AvatarImage className="w-10 h-10" src="https://image.shutterstock.com/image-vector/job-portal-lettering-logo-design-260nw-1939068112.jpg" />
            </Avatar>
          </TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>31-08-2024</TableCell>
          <TableCell className="text-right cursor-pointer">
            <Popover>
              <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
              <PopoverContent className="w-32">
                <div className='flex items-center gap-2 w-fit cursor-pointer '>
                  <Edit2 className='w-4'/>
                  <span>Edit</span>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>


        </TableBody>
     </Table>
    </div>
  )
}

export default CompaniesTable
