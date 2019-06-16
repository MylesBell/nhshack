import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Staff, Training, Equipment } from "../types";

interface Props {
  trainings: Array<Training>
  staff: Array<Staff>
  equipments: Array<Equipment>
}

export default class TrainingTable extends Component<Props, {}> {
  render() {
    return (
      <Paper style={{ padding: 20 }}>
        <Typography variant="h4">Training</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Equipment ID</TableCell>
              <TableCell align="right">Staff ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.trainings.map(training => (
              <TableRow key={training.id}>
                <TableCell component="th" scope="row">
                  {training.id}
                </TableCell>
                <TableCell align="right">{training.date}</TableCell>
                <TableCell align="right">{training.equipmentId}</TableCell>
                <TableCell align="right">{training.staffId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
