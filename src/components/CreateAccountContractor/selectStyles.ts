const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      fontSize: "1rem",
      fontWeight: 400,
      color: "var(--grey-font)",
      height: "2rem",
      width: "15rem",
      border: "1.5px solid #260101",
      borderRadius: "5px",
      outline: "none",
      display: "flex",
      overflow: "hidden",
      boxShadow: state.isFocused ? "none" : "none",
      "&:hover": {
        border: "1.5px solid #260101",
      },
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      height: "2rem",
      overflow: "hidden",
      display: "flex",
      flexWrap: "nowrap",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "#260101",
      color: "white",
      borderRadius: "3px",
      fontSize: "0.9rem",
      padding: "0 5px",
      height: "1.5rem",
      display: "flex",
      alignItems: "center",
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: "white",
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: "white",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "red",
        color: "white",
      },
    }),
    menu: (provided: any) => ({
      ...provided,
      width: "15rem",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#260101" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "#d3d3d3",
      },
    }),
};

export default customStyles;
