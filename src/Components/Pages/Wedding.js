import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import "./Wedding.css";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import img1 from "./Group 36 (1).svg";
import AOS from "aos";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
export const Wedding = () => {
  const url = "http://localhost:3001";
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [dday, setdday] = React.useState(dayjs());
  const [appointDate, setappointDate] = React.useState(dayjs());

  const selectdday = (newLocale) => {
    setdday(newLocale);
    setformData({ ...formData, dday: dayjs(newLocale).format("DD/MM/YYYY") });
  };

  const selectappoint = (newLocale) => {
    setappointDate(newLocale);
    setformData({ ...formData, appointDate: dayjs(newLocale).format("DD/MM/YYYY") });
  };

  const [formData, setformData] = useState({ name: "", email: "", dday: "", note: "", appointDate: "" });

  const handleFormSubmit = async () => {
    const data = await axios.post(`${url}/formData`, { category: "wedding collection", ...formData });
    if (data) {
      toast.success("Thank you! Your response if saved with us!");
      console.log(data);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: "black"
      }}
    >
      <Toaster />
      <div className="weddingbanner">
        <div className="weddingbannerinner">
          <span className="wb1">Wedding Collections</span>
          <span className="wb2">
            As you hold hands and shine together and promise to live as one forever, you need to look your best as
            you've always dreamt.
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="weddingbg"
      >
        <div className="wedsec1" style={{ marginTop: "100px" }}>
          <div className="wedsec1img">
            <img src={img1} alt="" />
          </div>

          <div className="wedsec1cont">
            <span>
              We understand wedding chores could overwhelm you, Here we are to take off your burden of how you're going
              to look.
            </span>
            <span style={{ marginTop: "10px" }}>Here we are to take off your burden of how you're going to look.</span>
          </div>
        </div>
        <div className="wedsec2">
          <div className="wedsec1img">
            <img src={img1} alt="" />
          </div>

          <div className="wedsec2cont">
            <span>Get in touch and allow us to unfold</span>
            <span>your dream attire</span>
          </div>
        </div>
        <div className="wedsec1" style={{ marginTop: "80px" }}>
          <div className="wedsec1img">
            <img src={img1} alt="" />
          </div>

          <div className="wedsec1cont">
            <span>A few ounces of personal attention along with some love and care.</span>
            <span style={{ marginTop: "10px" }}>We assure you a perfect attire that'll be spoken about, forever.</span>
          </div>
        </div>
        <div className="weddingforms">
          <span className="weddingt2">To discuss further, provide your </span>
          <TextField
            id="outlined-basic"
            label="Name"
            value={formData.name}
            onChange={(e) => setformData({ ...formData, name: e.target.value })}
            variant="outlined"
            style={{ width: "500px", marginTop: "30px" }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            value={formData.email}
            onChange={(e) => setformData({ ...formData, email: e.target.value })}
            variant="outlined"
            style={{ width: "500px", marginTop: "30px" }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs} className="datewidth">
            <Stack spacing={3} className="datewidth">
              <MobileDatePicker
                label="When is the big day ?"
                inputFormat="MM/DD/YYYY"
                value={dday}
                onChange={selectdday}
                renderInput={(params) => <TextField {...params} />}
                className="datewidth"
                disablePast
              />
            </Stack>
          </LocalizationProvider>
          <TextField
            id="outlined-basic"
            label="Any special note	"
            variant="outlined"
            className="datewidth"
            value={formData.note}
            onChange={(e) => setformData({ ...formData, note: e.target.value })}
            style={{ marginTop: "30px" }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs} className="datewidth">
            <Stack spacing={3} className="datewidth">
              <MobileDatePicker
                label="Appointment Date"
                inputFormat="MM/DD/YYYY"
                value={appointDate}
                onChange={selectappoint}
                renderInput={(params) => <TextField {...params} />}
                className="datewidth"
                disablePast
              />
            </Stack>
          </LocalizationProvider>
          <button style={{ cursor: "pointer" }} className="weddingbookbtn" onClick={handleFormSubmit}>
            Book
          </button>
        </div>
      </div>
    </div>
  );
};
