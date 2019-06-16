import React, { Component } from "react";
import "./App.css";
import StaffTable from "./components/staffTable";
import EquipmentTable from "./components/equipmentTable";
import RoleTable from "./components/roleTable";
import TrainingTable from "./components/trainingTable";
import { Staff, Training, Equipment, Role } from "./types";
import { getStaff, getEquipment, getRoles, getTraining } from "./api";
import Filters from "./components/filters";
import StaffCreate from "./components/staffCreate";
import PieChart from "react-minimal-pie-chart";

export interface AppState {
  staff: Array<Staff>;
  trainings: Array<Training>;
  equipments: Array<Equipment>;
  roles: Array<Role>;
  staffFiltered: Array<Staff>;
  trainingsFiltered: Array<Training>;
  equipmentsFiltered: Array<Equipment>;
  rolesFiltered: Array<Role>;
}

class App extends Component<{}, AppState> {
  state: AppState = {
    staff: [],
    trainings: [],
    equipments: [],
    roles: [],
    staffFiltered: [],
    trainingsFiltered: [],
    equipmentsFiltered: [],
    rolesFiltered: []
  };

  componentDidMount() {
    getStaff().then(res => {
      this.setState(state => {
        console.log(
          Object.assign({}, state, res, { staffFiltered: res.staff })
        );
        return Object.assign({}, state, res, { staffFiltered: res.staff });
      });
    });
    getEquipment().then(res => {
      this.setState(state => {
        console.log(
          Object.assign({}, state, res, { equipmentsFiltered: res.equipments })
        );
        return Object.assign({}, state, res, {
          equipmentsFiltered: res.equipments
        });
      });
    });
    getRoles().then(res => {
      this.setState(state => {
        console.log(
          Object.assign({}, state, res, { rolesFiltered: res.roles })
        );
        return Object.assign({}, state, res, {
          rolesFiltered: res.roles
        });
      });
    });
    getTraining().then(res => {
      this.setState(state => {
        console.log(
          Object.assign({}, state, res, { trainingsFiltered: res.trainings })
        );
        return Object.assign({}, state, res, {
          trainingsFiltered: res.trainings
        });
      });
    });
  }

  search(name: string, ward: string, equipmentName: string) {
    this.setState(state => {
      console.log(state);
      let staffFiltered = this.state.staff.filter(
        member =>
          member.name.toLowerCase().includes(name.toLowerCase()) &&
          member.ward.toLowerCase().includes(ward.toLowerCase())
      );
      let equipmentsFiltered = this.state.equipments.filter(
        equipment =>
          equipment.manufacturer
            .toLowerCase()
            .includes(equipmentName.toLowerCase()) ||
          equipment.model.toLowerCase().includes(equipmentName.toLowerCase()) ||
          equipment.type.toLowerCase().includes(equipmentName.toLowerCase())
      );
      let trainingsFiltered = this.state.trainings.filter(training =>
        equipmentsFiltered.some(
          item =>
            item.id === training.equipmentId &&
            staffFiltered.some(item => item.id === training.staffId)
        )
      );

      if (equipmentName != "") {
        staffFiltered = staffFiltered.filter(member =>
          trainingsFiltered.some(item => item.staffId === member.id)
        );
      }

      if (name != "" || ward != "") {
        equipmentsFiltered = equipmentsFiltered.filter(equipment =>
          trainingsFiltered.some(item => item.equipmentId === equipment.id)
        );
      }

      return Object.assign(
        {},
        state,
        { staffFiltered: staffFiltered },
        { equipmentsFiltered: equipmentsFiltered },
        { trainingsFiltered: trainingsFiltered }
      );
    });
  }

  trainingComplete = (state: AppState) => {
    console.log("training", state);
    let complete = state.staffFiltered.filter(member =>
      this.doneTraining(member, state.roles, state.trainings)
      ).length;
    console.log("training result", complete);
    return complete;
  };

  doneTraining = (
    member: Staff,
    roles: Array<Role>,
    trainings: Array<Training>
  ) => {
    let memberRole = roles.find(role => member.roleId === role.id);
    if (!memberRole) {
      return false;
    }
    console.log("member", memberRole);

    let memberTraining = memberRole.equipment.filter(x =>
      trainings.find(y => y.equipmentId === x && y.staffId === member.id)
    );
    return memberRole.equipment.length <= memberTraining.length;
  };

  render() {
    return (
      <div className="App">
        <Filters
          search={(name: string, ward: string, equipment: string) =>
            this.search(name, ward, equipment)
          }
        />
        <PieChart
          data={[
            {
              title: "Complete",
              value: this.trainingComplete(this.state),
              color: "#33e327"
            },
            {
              title: "Required",
              value:
                this.state.staffFiltered.length -
                this.trainingComplete(this.state),
              color: "#C13C37"
            }
          ]}
          lineWidth={15}
          paddingAngle={5}
          lengthAngle={-360}
          style={{ height: 300, padding: 20 }}
        />
        <StaffTable staff={this.state.staffFiltered} />
        <EquipmentTable equipments={this.state.equipmentsFiltered} />
        <RoleTable roles={this.state.rolesFiltered} />
        <TrainingTable
          staff={this.state.staffFiltered}
          equipments={this.state.equipmentsFiltered}
          trainings={this.state.trainingsFiltered}
        />
        <StaffCreate />
      </div>
    );
  }
}

export default App;
