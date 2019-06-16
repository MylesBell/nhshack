export interface Staff {
  id: number;
  registeredId: number;
  name: string;
  band: string;
  startDate: string;
  status: string;
  ward: string;
  roleId: number;
}
export interface StaffResponse {
  staff: Array<Staff>;
}

export interface Training {
  id: number;
  date: Date;
  equipmentId: number;
  staffId: number;
}
export interface TrainingResponse {
  trainings: Array<Training>;
}

export interface Equipment {
  id: number;
  manufacturer: string;
  type: string;
  model: string;
  ward: string;
  serviceDate: Date;
  version: number;
}
export interface EquipmentResponse {
  equipments: Array<Equipment>;
}

export interface Role {
  id: number;
  name: string;
  requiredTraining: Array<number>;
}
export interface RoleResponse {
  roles: Array<Role>;
}
