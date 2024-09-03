import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterSearch, setSearchedQuery } from '@/redux/jobSlice'
import { Button } from './ui/button'

const filterData=[
    {
        filterType:"Location",
        array:["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        filterType:"Industry",
        array:["Frontend Developer", "Backend Developer", "Fullstack Developer"]
    },
    // {
    //     filterType:"Salary",
    //     array:["0-40k", "42k-1lakh", "1lakh to 5 lakh"]
    // }

]


const FilterCard = () => {
//     const[selectedValue,setSelectedValue]=useState("")
//    const dispatch =useDispatch()
//     const changeHandler=(value)=>{
//        setSelectedValue(value)
//     }
//    useEffect(()=>{
//      dispatch(setFilterSearch(selectedValue))
     
//    },[selectedValue])
const dispatch = useDispatch();
const selectedValue = useSelector((state) => state.job.filtersearch);

const changeHandler = (value) => {
  dispatch(setFilterSearch(value));
};

const resetFilterHandler = () => {
    dispatch(setFilterSearch("")); // Reset the filtersearch value to an empty string
  };

  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <Button onClick={resetFilterHandler}>Reset filter</Button>
      <hr className='mt-3'/>
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {
            filterData.map((data,index)=>(
                <div>
                    <h1 className='font-bold text-lg'>{data.filterType}</h1>
                    {
                        data.array.map((item,idx)=>{
                            //just generating random id 
                            const itemId=`id${index}-${idx}`
                            return(
                                <div className='flex items-center space-x-2 m-2'>
                                    <RadioGroupItem value={item} id={itemId}/>
                                    <Label htmlFor={itemId}>{item}</Label>
                                </div>
                            )
                        })
                    }
                </div>
            ))
        }
      </RadioGroup>

    </div>
  )
}

export default FilterCard
