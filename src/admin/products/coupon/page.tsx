"use client";

import React, { useState } from "react";
import style from "./coupon.module.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function ProductCoupon() {
  const [category, setCategory] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <div className={style.body}>
      <div className={style.content}>
        <div className={style.title}>Coupon Entry</div>
        <div className={style.form}>
          <FormControl className={style.input}>
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
            className={style.input}
            // value={}
            // onChange={}
          />
          <FormControl className={style.input}>
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
            className={style.input}
            // value={}
            // onChange={}
          />
        </div>
      </div>
      <div className={style.content}>
        <div className={style.title}>List of Coupon</div>
        <div className={style.table}>
          <div className={`${style.row} ${style.header}`}>
            <div className={style.cell}>Name</div>
            <div className={style.cell}>Category</div>
            <div className={style.cell}>Agency</div>
            <div className={style.cell}>Cost</div>
          </div>
          <div className={style.row}>
            <div className={style.cell}>Free Shipping</div>
            <div className={style.cell}>Shipping</div>
            <div className={style.cell}>UPS</div>
            <div className={style.cell}>$12.30</div>
          </div>
          <div className={style.row}>
            <div className={style.cell}>Bronze Discount</div>
            <div className={style.cell}>Membership</div>
            <div className={style.cell}>PHP-Inc</div>
            <div className={style.cell}>$1.50</div>
          </div>
          <div className={style.row}>
            <div className={style.cell}>Gold Discount</div>
            <div className={style.cell}>Membership</div>
            <div className={style.cell}>PHP-Inc</div>
            <div className={style.cell}>$1.50</div>
          </div>
        </div>
      </div>
    </div>
  );
}
