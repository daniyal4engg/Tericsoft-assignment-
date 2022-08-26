import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import { Box, TextField } from "@mui/material";
// add modal
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BasicModal } from "./addTable";
import EditModal from "./EditModal";

export default function BasicTable() {
  const [data, setData] = useState([]);
  // const [del, setDel] = useState({});
  // const [editD, setEditD] = useState({});

  const getData = () => {
    axios
      .get("http://localhost:8080/task")
      .then((res) => setData(res.data))
      .then((err) => console.log(err));
  };
  //   console.log(data);
  var newList;
  const deleteButton = (id) => {
    // console.log(_id);
    axios.delete(`http://localhost:8080/task/${id}`).then(() => {
      newList = data.filter((el) => el.id !== id);
      setData(newList);
    });
  };
  useEffect(() => {
    getData();
  }, [newList]);
  return (
    <>
      {/* add */}
      <BasicModal />
      {/* populate */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">DOB</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Hobbies</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((e) => (
              <TableRow
                key={e.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {e.name}
                </TableCell>
                <TableCell align="center">{e.email}</TableCell>
                <TableCell align="center">{e.phone}</TableCell>
                <TableCell align="center">{e.dob}</TableCell>
                <TableCell align="center">{e.gender}</TableCell>
                <TableCell align="center">{e.hobbies}</TableCell>

                <TableCell align="center">
                  <EditModal prop={e.id} />
                </TableCell>
                <TableCell align="center">
                  <Button variant="text" onClick={() => deleteButton(e.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
