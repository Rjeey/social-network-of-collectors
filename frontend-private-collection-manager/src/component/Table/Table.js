import React, { useState } from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const [users, setUsers] = useState("");
  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Sure Name", field: "surename" },
      { title: "Role", field: "role", lookup: { 1: "Admin", 2: "User" } },
      { title: "Email", field: "email" },
    ],
    data: [
      {
        name: "Rjeey",
        surename: "Rjeey",
        role: 1,
        email: "rjeey@gmail.com",
      },
      {
        name: "Rjeey1",
        surename: "Rjeey1",
        role: 2,
        email: "rjeey1@gmail.com",
      },
      {
        name: "Rjeey2",
        surename: "Rjeey2",
        role: 2,
        email: "rjeey2@gmail.com",
      },
    ],
  });

  return (
    <MaterialTable
      title="Users"
      columns={state.columns}
      data={state.data}
      options={{
        selection: true,
        actionsColumnIndex: -1,
      }}
      actions={[
        {
          tooltip: "Remove All",
          icon: "delete",
          onClick: (evt, rowData) =>
            new Promise((resolve) => {
              resolve();
              setState((prevState) => {
                let data = [...prevState.data];
                rowData.forEach((rd) => {
                  data = data.filter((t) => t.tableData.id !== rd.tableData.id);
                });
                return { ...prevState, data };
              });
            }),
        },
      ]}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            resolve();
            setState((prevState) => {
              const data = [...prevState.data];
              data.push(newData);
              return { ...prevState, data };
            });
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            resolve();
            if (oldData) {
              setState((prevState) => {
                const data = [...prevState.data];
                data[data.indexOf(oldData)] = newData;
                return { ...prevState, data };
              });
            }
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            resolve();
            setState((prevState) => {
              const data = [...prevState.data];
              data.splice(data.indexOf(oldData), 1);
              return { ...prevState, data };
            });
          }),
      }}
    />
  );
}
