"use client";

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { generateRandomString } from "@/utils/utils";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Image from "next/image";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";

interface MerchantData {
  _id?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  photo?: string;
  banks?: any[];
  orderPoints?: any[];
}

const MyInfo = () => {
  const [bankUniqueId, setBankUniqueId] = useState(generateRandomString());
  const [info, setInfo] = useState<MerchantData>({});
  const [photos, setPhotos] = useState(null);
  const [textDisable, setTextDisable] = useState(false);
  const [roles, setRoles] = useState("");
  const [formData, setFormData] = useState({
    _id: "",
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    photo: "",
  });

  const searchParams = useSearchParams();
  const merchantId = searchParams.get("id");
  if (merchantId !== null) {
    localStorage.setItem("merchantId", merchantId);
  } else {
    console.log("No merchant exists");
  }

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      setTextDisable(true);
    }
    setRoles(role || "");
  }, []);

  async function fetchData() {
    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    try {
      if (role === "merchant") {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/merchants/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          setInfo(data);
        } else {
          console.error("Failed to fetch data");
        }
      } else {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/merchants/${merchantId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          setInfo(data);
        } else {
          console.error("Failed to fetch data");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function saveData() {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      console.log({ info });

      // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/merchantBanks/clear/${userId}`, {
      //     method: 'DELETE',
      //     headers: {
      //         'Authorization': `Bearer ${token}`
      //     }}
      // )
      info &&
        info.banks?.forEach(async (bank) => {
          if (typeof bank === "string") {
            return;
          }
          const formdata = new FormData();
          formdata.append("type", bank.type);
          formdata.append("name", bank.name);
          formdata.append("number", bank.number);
          const fileType = bank.photo.type;
          const fileExt = fileType.split("/")[1];
          const randomFileName =
            new Date().valueOf().toString() + "." + fileExt;

          console.log(JSON.stringify(bank));

          formdata.append("photo", bank.photo, randomFileName);
          userId && formdata.append("merchantId", userId);

          const resp = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/merchantBanks`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
              },
              body: formdata,
            }
          );
          console.log({ resp });
        });
      const {
        address,
        city,
        country,
        first_name,
        last_name,
        phone,
        photo,
        state,
      } = info;
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/merchants/${userId}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            address,
            city,
            country,
            first_name,
            last_name,
            phone,
            photo,
            state,
          }),
        }
      );
      console.log(response);

      if (response.ok) {
        const data = await response.json();
        alert("Data saved");
      } else {
        console.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event: any) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const handleBankChangeImage = (event: any, key: number) => {
    console.log(event.target.files);
    const tmpInfo = { ...info };
    tmpInfo.banks =
      tmpInfo.banks &&
      tmpInfo.banks.map((bank) => {
        if (bank._id === key) {
          bank.photo = event.target.files[0];
        }
        return bank;
      });
    setInfo(tmpInfo);
  };
  const handleBankChange = (event: any, key: number) => {
    console.log({ key });
    const tmpInfo = { ...info };
    tmpInfo.banks =
      tmpInfo.banks &&
      tmpInfo.banks.map((bank) => {
        if (bank._id === key) {
          bank[event.target.name] = event.target.value;
        }
        return bank;
      });
    console.log({ tmpInfo });
    setInfo(tmpInfo);
  };

  const handleImageChange = (e: any) => {
    const imageFile = e.target.files[0];
    setPhotos(imageFile);
  };
  return (
    <Card sx={{ p: 2 }}>
      <CardHeader
        title="Personal Information"
        TypographyProps={{ variant: "h6" }}
      />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={(e) => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={2}>
            {/* {info.map((item, index) => ( */}
            {/* <div> */}
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                1. Personal Info
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                color="secondary"
                label="ID Code"
                value={info["_id"]}
                onChange={handleChange}
                InputLabelProps={{ shrink: info["_id"] ? true : false }}
                disabled={textDisable}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="first_name"
                color="secondary"
                label="First Name"
                value={info.first_name}
                onChange={handleChange}
                InputLabelProps={{ shrink: info.first_name ? true : false }}
                disabled={textDisable}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                color="secondary"
                label="Last Name"
                name="last_name"
                value={info.last_name}
                onChange={handleChange}
                InputLabelProps={{ shrink: info.last_name ? true : false }}
                disabled={textDisable}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                color="secondary"
                fullWidth
                label="Phone"
                name="phone"
                value={info.phone}
                onChange={handleChange}
                InputLabelProps={{ shrink: info.phone ? true : false }}
                disabled={textDisable}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                color="secondary"
                label="Address"
                name="address"
                value={info.address}
                onChange={handleChange}
                InputLabelProps={{ shrink: info.address ? true : false }}
                disabled={textDisable}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                color="secondary"
                label="City"
                name="city"
                value={info.city}
                onChange={handleChange}
                InputLabelProps={{ shrink: info.city ? true : false }}
                disabled={textDisable}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                color="secondary"
                label="State"
                name="state"
                value={info.state}
                onChange={handleChange}
                InputLabelProps={{ shrink: info.state ? true : false }}
                disabled={textDisable}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                color="secondary"
                label="Country"
                name="country"
                value={info.country}
                onChange={handleChange}
                InputLabelProps={{ shrink: info.country ? true : false }}
                disabled={textDisable}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                2. Billing Info
              </Typography>
            </Grid>
            <TableContainer>
              <Table
                sx={{ minWidth: 650, minHeight: 100 }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Bank Name</TableCell>
                    <TableCell>Account Number</TableCell>
                    <TableCell>Account Name</TableCell>
                    {roles !== "admin" && <TableCell>Action</TableCell>}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {info.banks &&
                    info.banks.map((item) => (
                      <TableRow
                        key={item._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <TextField
                            fullWidth
                            color="secondary"
                            label="Bank Type"
                            name="type"
                            value={item.type}
                            onChange={(event) => {
                              handleBankChange(event, item._id);
                            }}
                            InputLabelProps={{
                              shrink: item.type ? true : false,
                            }}
                            disabled={textDisable}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            fullWidth
                            color="secondary"
                            label="Account Number"
                            name="number"
                            value={item.number}
                            onChange={(event) => {
                              handleBankChange(event, item._id);
                            }}
                            InputLabelProps={{
                              shrink: item.number ? true : false,
                            }}
                            disabled={textDisable}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            fullWidth
                            color="secondary"
                            label="Account Name"
                            name="name"
                            value={item.name}
                            onChange={(event) => {
                              handleBankChange(event, item._id);
                            }}
                            InputLabelProps={{
                              shrink: item.name ? true : false,
                            }}
                            disabled={textDisable}
                          />
                        </TableCell>
                        {roles !== "admin" && (
                          <>
                            <TableCell>
                              <div className="text-md pb-5"></div>
                              <input
                                accept="image/*"
                                id="image-upload"
                                type="file"
                                name="photo"
                                onChange={(event) => {
                                  handleBankChangeImage(event, item._id);
                                }}
                              />
                              {item.photo && (
                                <div style={{ marginTop: 10 }}>
                                  <img
                                    src={
                                      typeof item.photo === "string"
                                        ? item.photo
                                        : URL.createObjectURL(item.photo)
                                    }
                                    alt="Selected"
                                    width={200}
                                    height={100}
                                  />
                                </div>
                              )}
                            </TableCell>
                            <TableCell>
                              <IconButton
                                onClick={() => {
                                  const tmpInfo = { ...info };
                                  if (
                                    tmpInfo.banks &&
                                    tmpInfo.banks.length > 0
                                  ) {
                                    const tmpBanks = tmpInfo.banks.filter(
                                      (bank) => bank._id !== item._id
                                    );
                                    tmpInfo.banks = tmpBanks;
                                    setInfo(tmpInfo);
                                  }
                                }}
                              >
                                <DeleteOutlineIcon fontSize="small" />
                              </IconButton>
                            </TableCell>
                          </>
                        )}
                      </TableRow>
                    ))}
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <IconButton
                        onClick={() => {
                          const tmpInfo = { ...info };
                          tmpInfo.banks && tmpInfo.banks.length > 0
                            ? tmpInfo.banks.push({ _id: bankUniqueId })
                            : (tmpInfo.banks = [{ _id: bankUniqueId }]);
                          setInfo(tmpInfo);
                        }}
                      >
                        <AddCircleIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {/* </div> */}
            {/* ))} */}
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions className="flex justify-end">
          {/* <Button
            size="large"
            color="secondary"
            variant="outlined"
            onClick={reloadPage}
          >
            Cancel
          </Button> */}
          {roles !== "admin" && (
            <div className="flex justify-center mt-30 ">
              <Button
                variant="contained"
                size="medium"
                onClick={saveData}
                className="text-white rounded-lg hover:bg-[#8fe08d] bg-[#218c20] font-bold px-10 py-4"
              >
                Save
              </Button>
            </div>
          )}
        </CardActions>
      </form>

      <TableContainer>
        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: 15 }}>
          Order Points
        </Typography>
        <Table sx={{ minWidth: 650, minHeight: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Points</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {info.orderPoints &&
              info.orderPoints.map((item) => (
                <TableRow>
                  <TableCell>{item.points}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};
export default MyInfo;
