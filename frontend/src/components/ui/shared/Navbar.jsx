import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { LogOut, User2 } from "lucide-react";

const Navbar = () => {
    const user=false





  return (
    <div className="bg-white">
      <div className=" flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {
            !user ? (
                <div className="flex items-center gap-2">
                    <Link to="/login"><Button variant="outline">Login</Button></Link>
                    <Link to="/signup"> <Button className="bg-[#6A38C2] hover:bg-[#552aa0] ">Signup</Button></Link>
                   
                </div>
            ) :(
                <Popover>
                <PopoverTrigger>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Shashank </h4>
                      <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 text-gray-600">
                    <div className="flex items-center cursor-pointer gap-2 w-fit">
                        <User2/>
                    <Button variant="link">View Profile</Button>
                    </div>
                    <div className="flex items-center cursor-pointer gap-2 w-fit">
                    <LogOut/>
                    <Button variant="link">Logout</Button>
                    </div>
                    
                  </div>
                </PopoverContent>
              </Popover>
            )
          }
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
