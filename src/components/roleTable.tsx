import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { RoleResponse } from "../types";

export default class RoleTable extends Component<RoleResponse, {}> {
  render() {
    return (
      <Paper style={{ padding: 20 }}>
        <Typography variant="h4">Roles</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Equipment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.roles.map(role => (
              <TableRow key={role.id}>
                <TableCell component="th" scope="row">
                  {role.id}
                </TableCell>
                <TableCell align="right">{role.name}</TableCell>
                <TableCell align="right">{role.requiredTraining}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
