import React, { useState } from "react";
import back from "./back.svg";
import "./ImageCons.css";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import steps from "./steps.svg";
import smilebar from "./smilebar.svg";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { Stack } from "@mui/system";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const ImageCons = () => {
  const url = "http://localhost:3001";

  const [appointDate, setappointDate] = React.useState(dayjs());

  const selectappoint = (newLocale) => {
    setappointDate(newLocale);
    setformData({ ...formData, appointDate: dayjs(newLocale).format("DD/MM/YYYY") });
  };

  const [formData, setformData] = useState({ name: "", email: "", note: "", appointDate: "" });

  const handleFormSubmit = async () => {
    const data = await axios.post(`${url}/formData`, { category: "image consulting", ...formData });
    if (data) {
      toast.success("Thank you! Your response if saved with us!");
      console.log(data);
    }
  };
  return (
    <div className="imagecons">
      <Toaster />
      <div className="topbar">
        <div className="background">
          <span className="wb1">Image Consulting</span>
          <span className="wb2">"Pride in the new look"</span>
        </div>
      </div>
      <div className="weddingbg">
        <div className="icons">
          <div className="icon-holder">
            <img src={img1} />
            <span>Confused what looks good on you?</span>
          </div>
          <div className="icon-holder">
            <img src={img2} />
            <span>Unsure which dress suits your personality?</span>
          </div>
          <div className="icon-holder">
            <img src={img3} />
            <span>Trouble identifying the right color choices?</span>
          </div>
        </div>
        <div className="img-row">
          <img src={back} />
          <p>
            While we hold In-depth conversations to understand you better.
            <br /> It is important we Fashion is mostly an individual choice. Uncover your aspirations in THE DESIGN
            HOUSE.
          </p>
        </div>

        <div className="steps">
          <img src={steps} />
        </div>
        <div className="steps">
          <img src={smilebar} />
        </div>
        <div style={{}} className="weddingforms imageform">
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

export default ImageCons;
