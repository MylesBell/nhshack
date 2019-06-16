import React from "react";
import TextField from "@material-ui/core/TextField";

interface State {
  name: string;
  ward: string;
  equipment: string;
}

interface Props {
  search(name: string, ward: string, equipment: string): void;
}

export default function Filters(props: Props) {
  const [values, setValues] = React.useState<State>({
    name: "",
    ward: "",
    equipment: ""
  });

  const handleChange = (name: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let newValues = { ...values, [name]: event.target.value };
    setValues(newValues);
    props.search(newValues.name, newValues.ward, newValues.equipment);
  };

  return (
    <div>
      <TextField
        style={{ margin: 10 }}
        id="outlined-name"
        label="Name"
        value={values.name}
        onChange={handleChange("name")}
        margin="normal"
        variant="outlined"
      />
      <TextField
        style={{ margin: 10 }}
        id="outlined-name"
        label="Ward"
        value={values.ward}
        onChange={handleChange("ward")}
        margin="normal"
        variant="outlined"
      />
      <TextField
        style={{ margin: 10 }}
        id="outlined-name"
        label="Equipment"
        value={values.equipment}
        onChange={handleChange("equipment")}
        margin="normal"
        variant="outlined"
      />
    </div>
  );
}
