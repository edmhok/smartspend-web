"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Coupon() {
  const [category, setCategory] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <div className='body'>
      <div className='content'>
        <div className='title'>Coupon Entry</div>
        <div className='form'>
          <FormControl className='input'>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={10}>Category 1</MenuItem>
              <MenuItem value={20}>Category 2</MenuItem>
              <MenuItem value={30}>Category 3</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Name"
            placeholder="Name"
            className='input'
            // value={}
            // onChange={}
          />
          <FormControl className='input'>
            <InputLabel id="demo-simple-select-label">Agency</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Agency"
              onChange={handleChange}
            >
              <MenuItem value={10}>Agency 1</MenuItem>
              <MenuItem value={20}>Agency 2</MenuItem>
              <MenuItem value={30}>Agency 3</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Cost"
            placeholder="Cost"
            className='input'
            // value={}
            // onChange={}
          />
        </div>
      </div>
      <div className='content'>
        <div className='title'>List of Coupon</div>
        <div className='table'>
          <div className= 'row header'>
            <div className='cell'>Name</div>
            <div className='cell'>Category</div>
            <div className='cell'>Agency</div>
            <div className='cell'>Cost</div>
          </div>
          <div className='row'>
            <div className='cell'>Free Shipping</div>
            <div className='cell'>Shipping</div>
            <div className='cell'>UPS</div>
            <div className='cell'>$12.30</div>
          </div>
          <div className='row'>
            <div className='cell'>Bronze Discount</div>
            <div className='cell'>Membership</div>
            <div className='cell'>PHP-Inc</div>
            <div className='cell'>$1.50</div>
          </div>
          <div className='row'>
            <div className='cell'>Gold Discount</div>
            <div className='cell'>Membership</div>
            <div className='cell'>PHP-Inc</div>
            <div className='cell'>$1.50</div>
          </div>
        </div>
      </div>
    </div>
  );
}
