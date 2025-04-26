import { useState } from "react";
import CustomMultiSelect from "../../Components/MultiSelect";

const MultiSelectUsage = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectionChange = (name, selected, id) => {
    setSelectedOptions(selected || []);
  };

  const options = [
    { id: "option1", label: "Option 1", value: "option1" },
    { id: "option2", label: "Option 2", value: "option2" },
    { id: "option3", label: "Option 3", value: "option3" },
    { id: "option4", label: "Option 4", value: "option4" },
    { id: "option5", label: "Option 5", value: "option5" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Custom Multi-Select Example
      </h1>
      <CustomMultiSelect
        options={options}
        label="Select Options"
        id="my-multiselect"
        name="my-multiselect"
        placeholder="Choose options..."
        selectedOptions={selectedOptions}
        changeHandler={handleSelectionChange}
        isMulti={true}
        isCreatable={true}
      />
      <div>
        <p>Selected Options:</p>
        {selectedOptions.length > 0 ? (
          <ul>
            {selectedOptions.map((option) => (
              <li key={option.id}>{option.label}</li>
            ))}
          </ul>
        ) : (
          <p>No options selected</p>
        )}
      </div>
    </div>
  );
};

export default MultiSelectUsage;
