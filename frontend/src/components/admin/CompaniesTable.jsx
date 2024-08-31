import React from 'react'
import { Table, TableCaption, TableHead, TableHeader, TableRow } from '../ui/table'

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
                <TableHead>Action</TableHead>

            </TableRow>
        </TableHeader>
     </Table>
    </div>
  )
}

export default CompaniesTable
