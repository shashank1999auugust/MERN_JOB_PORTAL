import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";

// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
const Jobs = () => {
  const {allJobs, filtersearch}=useSelector(store=>store.job)
  const[filterJobs,setFilterJobs]=useState(allJobs)

  useEffect(()=>{
    setFilterJobs(allJobs);
    if(filtersearch){
        const filteredJobs=allJobs.filter((job)=>{
          return job.title.toLowerCase().includes(filtersearch.toLowerCase()) ||
          job.description.toLowerCase().includes(filtersearch.toLowerCase()) ||
          job.location.toLowerCase().includes(filtersearch.toLowerCase())
        })
        setFilterJobs(filteredJobs)
    }
    else{
      setFilterJobs(allJobs)
    }
  },[allJobs,filtersearch])

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <FilterCard />
          </div>
          {filterJobs.length <= 0 ? (
            <span>Jobs not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {filterJobs.map((job) => (
                  <div key={job?._id}>
                    <Job job={job} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
