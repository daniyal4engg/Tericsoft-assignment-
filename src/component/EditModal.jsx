import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditModal({ prop }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState([]);

  console.log("sss", prop);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    hobbies: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://tericsoft.herokuapp.com/task/${prop}`, { ...formData })
      .then(() => {
        alert("Entry update succussfully");

        setFormData({
          name: "",
          email: "",
          phone: "",
          dob: "",
          gender: "",
          hobbies: "",
        });
      });
  };

  return (
    <div>
      <Button onClick={handleOpen}>Edit Entry</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <label>Name</label>
              <TextField
                id="filled-basic"
                label="name"
                name="name"
                variant="filled"
                value={formData.name}
                onChange={handleChange}
              />
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <label>email</label>
              <TextField
                id="filled-basic"
                label="email"
                name="email"
                variant="filled"
                value={formData.email}
                onChange={handleChange}
              />
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <label>Phone</label>
              <TextField
                id="filled-basic"
                label="phone"
                name="phone"
                variant="filled"
                value={formData.phone}
                onChange={handleChange}
              />
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <label>DOB</label>
              <TextField
                id="filled-basic"
                // label="dob"
                variant="filled"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <label>Gender</label>
              <label htmlFor="">Male</label>
              <TextField
                id="filled-basic"
                label="Male"
                variant="filled"
                type="radio"
                name="gender"
                value="male"
                // value={formData.gender}
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              <label htmlFor="">Female</label>
              <TextField
                id="filled-basic"
                label="Female"
                variant="filled"
                type="radio"
                name="gender"
                value="female"
                // value={formData.gender}
                onChange={handleChange}
                checked={formData.gender === "female"}
              />
            </Typography>

            <Typography id="modal-modal-title" variant="h6" component="h2">
              <label>Hobbies</label>
              <label htmlFor="">DebugCode</label>
              <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                type="checkbox"
                name="hobbies"
                value="DebugCode"
                // value={formData.hobbies}
                checked={formData.gender === "DebugCode"}
                onChange={handleChange}
              />
              <label htmlFor="">kungfu</label>
              <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                type="checkbox"
                name="hobbies"
                value="kungfu"
                // value={formData.hobbies}
                checked={formData.gender === "kungfu"}
                onChange={handleChange}
              />
              <label htmlFor="">Swimming</label>
              <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                type="checkbox"
                name="hobbies"
                value="Swimming"
                // value={formData.hobbies}
                checked={formData.gender === "Swimming"}
                onChange={handleChange}
              />
            </Typography>
            <TextField id="filled-basic" variant="filled" type="submit" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
