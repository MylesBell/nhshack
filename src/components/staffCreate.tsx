import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Staff } from "../types";
import { createStaff } from "../api";

export default function StaffCreate() {
  const [member, setMember] = React.useState<Staff>();
  const handleChange = (name: keyof Staff) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let newValues = { ...member, [name]: event.target.value } as Staff;
    setMember(newValues);
  };
  const post = () => {
      console.log(member);
      if (member) {
        createStaff(member);
      }
  }

  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant="h4">Staff Create</Typography>
      <TextField
        style={{ margin: 10 }}
        id="outlined-name"
        label="Id"
        value={member === undefined? "": member.id}
        onChange={handleChange("id")}
        margin="normal"
        variant="outlined"
      />
      <TextField
        style={{ margin: 10 }}
        id="outlined-name"
        label="registeredId"
        value={member === undefined? "": member.registeredId}
        onChange={handleChange("registeredId")}
        margin="normal"
        variant="outlined"
      />
      <TextField
        style={{ margin: 10 }}
        id="outlined-name"
        label="Name"
        value={member === undefined? "": member.name}
        onChange={handleChange("name")}
        margin="normal"
        variant="outlined"
      />
      <TextField
        style={{ margin: 10 }}
        id="outlined-name"
        label="band"
        value={member === undefined? "": member.band}
        onChange={handleChange("band")}
        margin="normal"
        variant="outlined"
      />
      <TextField
        style={{ margin: 10 }}
        id="outlined-name"
        label="startDate"
        value={member === undefined? "": member.startDate}
        onChange={handleChange("startDate")}
        margin="normal"
        variant="outlined"
      />
      <TextField
        style={{ margin: 10 }}
        id="outlined-name"
        label="status"
        value={member === undefined? "": member.status}
        onChange={handleChange("status")}
        margin="normal"
        variant="outlined"
      />
      <TextField
        style={{ margin: 10 }}
        id="outlined-name"
        label="ward"
        value={member === undefined? "": member.ward}
        onChange={handleChange("ward")}
        margin="normal"
        variant="outlined"
      />
      <TextField
        style={{ margin: 10 }}
        id="outlined-name"
        label="roleId"
        value={member === undefined? "": member.roleId}
        onChange={handleChange("roleId")}
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={post}>
        Create
      </Button>
    </Paper>
  );
}
