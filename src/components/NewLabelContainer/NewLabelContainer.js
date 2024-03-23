import * as React from "react";
import "./NewLabelContainer.scss";

const labelData = [
  {
    name: "MGR_B",
    description: "Managers in group B",
    color: "#0366D6",
  },
];

const LabelItem = ({ name, description, color }) => {
  const [labelName, setLabelName] = React.useState(name);
  const [labelDescription, setLabelDescription] = React.useState(description);
  const [labelColor, setLabelColor] = React.useState(color);

  return (
    <div className="label-item">
      <div className="label-name-container">
        <div className="label-name-title">label name</div>
        <input
          type="text"
          className="label-name"
          value={labelName}
          onChange={(e) => setLabelName(e.target.value)}
        />
      </div>
      <div className="label-description-container">
        <div className="label-description-title">Description</div>
        <input
          type="text"
          className="label-description"
          value={labelDescription}
          onChange={(e) => setLabelDescription(e.target.value)}
        />
      </div>
      <div className="label-color-container">
        <div className="label-color-title">Color</div>
        <div className="label-color">
          <img
            src={`https://cdn.builder.io/api/v1/image/assets/TEMP/61837f708d0e6ea6cd647d0419134fb630afa2d2b3004ac79552c7e8b2676b68?apiKey=1d613ba1556d47c3875b8c4e7d43fad0&`}
            alt=""
            className="label-color-swatch"
          />
          <input
            type="text"
            className="label-color-hex"
            value={labelColor}
            onChange={(e) => setLabelColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

const NewLabelContainer = () => {
  return (
    <div className="label-editor">
      <div className="label-list">
        {labelData.map((label, index) => (
          <LabelItem key={index} {...label} />
        ))}
      </div>
      <div className="label-actions">
        <button className="cancel-button">Cancel</button>
        <button className="create-button">Create</button>
      </div>
    </div>
  );
};

export default NewLabelContainer;
