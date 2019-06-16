import {
  Staff,
  StaffResponse,
  TrainingResponse,
  EquipmentResponse,
  RoleResponse
} from "./types";

export const URL: string = "https://nhs-training-db.herokuapp.com/";

export const createStaff = (member: Staff) => {
    return post(URL, member);
};
export const getStaff = () => {
  //   return new Promise<StaffResponse>((resolve, reject) => {
  //     resolve({
  //       staff: [
  //         {
  //           id: 1232,
  //           registeredId: 2468,
  //           name: "Will Beveridge",
  //           band: "8B",
  //           startDate: new Date("12/25/2012"),
  //           status: "Employed",
  //           ward: "Seahorse Ward",
  //           roleId: 9878
  //         },
  //         {
  //           id: 1234,
  //           registeredId: 2468,
  //           name: "Ed Lyon",
  //           band: "8B",
  //           startDate: new Date("12/25/2012"),
  //           status: "Employed",
  //           ward: "Seahorse Ward",
  //           roleId: 9878
  //         },
  //         {
  //           id: 1233,
  //           registeredId: 2648,
  //           name: "Flori Nightingale",
  //           band: "8C",
  //           startDate: new Date("10/01/2013"),
  //           status: "Employed",
  //           ward: "Seahorse Ward",
  //           roleId: 8878
  //         },
  //         {
  //           id: 1235,
  //           registeredId: 2486,
  //           name: "James Corden",
  //           band: "8D",
  //           startDate: new Date("11/25/2010"),
  //           status: "Employed",
  //           ward: "Otter Ward",
  //           roleId: 8878
  //         },
  //         {
  //           id: 1223,
  //           registeredId: 2428,
  //           name: "Tessa Johnson",
  //           band: "7",
  //           startDate: new Date("12/25/2010"),
  //           status: "Employed",
  //           ward: "Otter Ward",
  //           roleId: 7878
  //         },
  //         {
  //           id: 1231,
  //           registeredId: 2628,
  //           name: "Henna Khan",
  //           band: "7",
  //           startDate: new Date("12/06/2019"),
  //           status: "Employed",
  //           ward: "Otter Ward",
  //           roleId: 6878
  //         },
  //         {
  //           id: 1211,
  //           registeredId: 2648,
  //           name: "Myles Bell",
  //           band: "8A",
  //           startDate: new Date("12/27/2019"),
  //           status: "Employed",
  //           ward: "Otter Ward",
  //           roleId: 5878
  //         },
  //         {
  //           id: 1131,
  //           registeredId: 4628,
  //           name: "Nigel Stockton",
  //           band: "8A",
  //           startDate: new Date("12/21/2019"),
  //           status: "Employed",
  //           ward: "Otter Ward",
  //           roleId: 4878
  //         },
  //         {
  //           id: 1331,
  //           registeredId: 2228,
  //           name: "Sylvia Bolton",
  //           band: "7",
  //           startDate: new Date("12/06/2019"),
  //           status: "Employed",
  //           ward: "Seahorse Ward",
  //           roleId: 3878
  //         },
  //         {
  //           id: 2331,
  //           registeredId: 6228,
  //           name: "Amy Parker",
  //           band: "7",
  //           startDate: new Date("12/06/2019"),
  //           status: "Employed",
  //           ward: "Seahorse Ward",
  //           roleId: 2878
  //         }
  //       ]
  //     });
  //   });
  return api<StaffResponse>(URL + "staff", "staff");
};

export const getTraining = () => {
  return new Promise<TrainingResponse>((resolve, reject) => {
    resolve({
      trainings: [
        {
          id: 3576,
          date: new Date("01/01/2012"),
          equipmentId: 3591,
          staffId: 1234
        },
        {
          id: 3566,
          date: new Date("12/04/2013"),
          equipmentId: 3591,
          staffId: 1233
        },
        {
          id: 3616,
          date: new Date("07/01/2011"),
          equipmentId: 3591,
          staffId: 1235
        },
        {
          id: 3626,
          date: new Date("05/12/2010"),
          equipmentId: 3592,
          staffId: 1223
        },
        {
          id: 3636,
          date: new Date("02/01/2013"),
          equipmentId: 3592,
          staffId: 1232
        },
        {
          id: 3646,
          date: new Date("12/08/2019"),
          equipmentId: 3592,
          staffId: 1231
        },
        {
          id: 3656,
          date: new Date("12/08/2019"),
          equipmentId: 3593,
          staffId: 1231
        },
        {
          id: 3666,
          date: new Date("04/08/2019"),
          equipmentId: 3593,
          staffId: 1211
        },
        {
          id: 3676,
          date: new Date("04/08/2019"),
          equipmentId: 3593,
          staffId: 1131
        },
        {
          id: 3686,
          date: new Date("12/08/2019"),
          equipmentId: 3594,
          staffId: 1331
        },
        {
          id: 3696,
          date: new Date("12/08/2019"),
          equipmentId: 3594,
          staffId: 2331
        }
      ]
    });
  });
  // return api<TrainingResponse>(URL + "training")
};

export const getEquipment = () => {
  return new Promise<EquipmentResponse>((resolve, reject) => {
    resolve({
      equipments: [
        {
          id: 3591,
          manufacturer: "Resmed",
          type: "Breathing machine",
          model: "Air Sense",
          ward: "Otter Ward",
          serviceDate: new Date("02/03/2019"),
          version: 1
        },
        {
          id: 3592,
          manufacturer: "Resmed",
          type: "Breathing machine",
          model: "Air Sense",
          ward: "Seahorse Ward",
          serviceDate: new Date("03/03/2019"),
          version: 2
        },
        {
          id: 3593,
          manufacturer: "Oxygen",
          type: "Mechanical Ventilator",
          model: "Breathe well",
          ward: "Otter Ward",
          serviceDate: new Date("03/11/2018"),
          version: 10
        },
        {
          id: 3594,
          manufacturer: "Oxygen",
          type: "Mechanical Ventilator",
          model: "Breathe well",
          ward: "Seahorse Ward",
          serviceDate: new Date("03/12/2018"),
          version: 8
        },
        {
          id: 3595,
          manufacturer: "GSK",
          type: "Kidney machine",
          model: "Kiddington",
          ward: "Otter Ward",
          serviceDate: new Date("02/11/2017"),
          version: 5
        },
        {
          id: 3596,
          manufacturer: "GSK",
          type: "Kidney machine",
          model: "Kidderminster",
          ward: "Seahore Ward",
          serviceDate: new Date("02/01/2019"),
          version: 7
        },
        {
          id: 3597,
          manufacturer: "Vital Sign",
          type: "Heath monitor screen",
          model: "Heart rate and heart electrical tracing",
          ward: "Otter Ward",
          serviceDate: new Date("02/02/2016"),
          version: 10
        },
        {
          id: 3598,
          manufacturer: "Vital Sign",
          type: "Heath monitor screen",
          model: "Blood pressure",
          ward: "Seahorse Ward",
          serviceDate: new Date("02/04/2016"),
          version: 8
        }
      ]
    });
  });
  // return api<EquipmentResponse>(URL + "equipment")
};

export const getRoles = () => {
  return new Promise<RoleResponse>((resolve, reject) => {
    resolve({
      roles: [
        {
          id: 9878,
          name: "Nurse grade 5",
          requiredTraining: [3598, 3596, 3595, 3593]
        },
        {
          id: 8878,
          name: "Nurse grade 6",
          requiredTraining: [3597, 3594, 3593, 3592]
        },
        {
          id: 7878,
          name: "Nurse grade 7",
          requiredTraining: [3596, 3595, 3592]
        },
        {
          id: 6878,
          name: "Dietician grade 6",
          requiredTraining: [3598, 3596, 3593]
        },
        {
          id: 5878,
          name: "Dietician grade 6",
          requiredTraining: [3595, 3592, 3593]
        },
        {
          id: 4878,
          name: "Surgeon grade 6",
          requiredTraining: [3598, 3594, 3592]
        },
        {
          id: 3878,
          name: "Surgeon grade 7",
          requiredTraining: [3597, 3591, 3592]
        },
        {
          id: 2878,
          name: "Surgeon grade 8",
          requiredTraining: [3595, 3593, 3591]
        },
        {
          id: 1878,
          name: "Doctor grade 6",
          requiredTraining: [3598, 3592, 3591]
        },
        {
          id: 1778,
          name: "Doctor grade 7",
          requiredTraining: [3598, 3593, 3595]
        }
      ]
    });
  });
  // return api<RoleResponse>(URL + "role")
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
