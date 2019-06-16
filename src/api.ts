import {
  Staff,
  StaffResponse,
  TrainingResponse,
  EquipmentResponse,
  RoleResponse
} from "./types";

export const URL: string = "https://nhs-training-db.herokuapp.com/";

export const createStaff = (member: Staff) => {
    return post(URL + "staff", member);
};
export const getStaff = () => {
    // return new Promise<StaffResponse>((resolve, reject) => {
    //   resolve({
    //     staff: [
    //       {
    //         id: "1232",
    //         registeredId: "2468",
    //         name: "Will Beveridge",
    //         band: "8B",
    //         startDate: "12/25/2012",
    //         status: "Employed",
    //         ward: "Seahorse Ward",
    //         roleId: "9878"
    //       }
    //     ]
    //   });
    // });
  return api<StaffResponse>(URL + "staff", "staff");
};

export const getTraining = () => {
  // return new Promise<TrainingResponse>((resolve, reject) => {
  //   resolve({
  //     trainings: [
  //       {
  //         id: "3576",
  //         date: "01/01/2012",
  //         equipmentId: "3591",
  //         staffId: "1234"
  //       }
  //     ]
  //   });
  // });
  return api<TrainingResponse>(URL + "training", "trainings")
};

export const getEquipment = () => {
  // return new Promise<EquipmentResponse>((resolve, reject) => {
  //   resolve({
  //     equipments: [
  //       {
  //         id: "3591",
  //         manufacturer: "Resmed",
  //         type: "Breathing machine",
  //         model: "Air Sense",
  //         ward: "Otter Ward",
  //         serviceDate: "02/03/2019",
  //         version: "1"
  //       }
  //     ]
  //   });
  // });
  return api<EquipmentResponse>(URL + "equipment", "equipments")
};

export const getRoles = () => {
  // return new Promise<RoleResponse>((resolve, reject) => {
  //   resolve({
  //     roles: [
  //       {
  //         id: "9878",
  //         name: "Nurse grade 5",
  //         equipment: ["3598", "3596", "3595", "3593"]
  //       }
  //     ]
  //   });
  // });
  return api<RoleResponse>(URL + "role", "roles");
};

function api<T>(url: string, name: string): Promise<T> {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .then(json => {
      return { [name]: json } as T;
    });
}

function post(url: string, data: Object): Promise<Object> {
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}
