import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { StaffResponse } from "../types";

export default class StaffTable extends Component<StaffResponse, {}> {
  render() {
    return (
      <Paper style={{ padding: 20 }}>
        <Typography variant="h4">Staff</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Registered ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Band</TableCell>
              <TableCell align="right">Role Id</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Ward</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.staff.map(member => (
              <TableRow key={member.id}>
                <TableCell component="th" scope="row">
                  {member.id}
                </TableCell>
                <TableCell align="right">{member.registeredId}</TableCell>
                <TableCell align="right">{member.name}</TableCell>
                <TableCell align="right">{member.band}</TableCell>
                <TableCell align="right">{member.roleId}</TableCell>
                <TableCell align="right">{member.startDate}</TableCell>
                <TableCell align="right">{member.status}</TableCell>
                <TableCell align="right">{member.ward}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
