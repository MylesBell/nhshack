export interface Staff {
  id: string;
  registeredId: string;
  name: string;
  band: string;
  startDate: string;
  status: string;
  ward: string;
  roleId: string;
}
export interface StaffResponse {
  staff: Array<Staff>;
}

export interface Training {
  id: string;
  date: string;
  equipmentId: string;
  staffId: string;
}
export interface TrainingResponse {
  trainings: Array<Training>;
}

export interface Equipment {
  id: string;
  manufacturer: string;
  type: string;
  model: string;
  ward: string;
  serviceDate: string;
  version: string;
}
export interface EquipmentResponse {
  equipments: Array<Equipment>;
}

export interface Role {
  id: string;
  name: string;
  equipment: Array<string>;
}
export interface RoleResponse {
  roles: Array<Role>;
}
