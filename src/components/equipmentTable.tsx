import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { EquipmentResponse } from "../types";

export default class EquipmentTable extends Component<EquipmentResponse,{}> {
  render() {
    return (
      <Paper style={{ padding: 20 }}>
        <Typography variant="h4">Equipment</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Manufacturer</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Model</TableCell>
              <TableCell align="right">Ward</TableCell>
              <TableCell align="right">Service Date</TableCell>
              <TableCell align="right">Version</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.equipments.map(equipment => (
              <TableRow key={equipment.id}>
                <TableCell component="th" scope="row">
                  {equipment.id}
                </TableCell>
                <TableCell align="right">{equipment.manufacturer}</TableCell>
                <TableCell align="right">{equipment.type}</TableCell>
                <TableCell align="right">{equipment.model}</TableCell>
                <TableCell align="right">{equipment.ward}</TableCell>
                <TableCell align="right">{equipment.serviceDate.toDateString()}</TableCell>
                <TableCell align="right">{equipment.version}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
