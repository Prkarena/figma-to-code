import * as React from "react";
import "./NewCard.scss";

const PurchaseRequestItem = ({ title, value, color }) => (
  <div className={`purchase-request-item ${color}`}>
    <div className="title">{title}</div>
    <div className="value">{value}</div>
  </div>
);

const PurchaseRequestData = [
  { title: "In Progress", value: "15", color: "blue" },
  { title: "Approved", value: "03", color: "green" },
  { title: "Rejected", value: "03", color: "red" },
  { title: "Cancel", value: "02", color: "red" },
];

function NewCard() {
  return (
    <>
      <section className="purchase-request">
        <header className="header">Purchase Request (23)</header>
        <div className="content">
          <div className="row">
            {PurchaseRequestData.slice(0, 2).map((item, index) => (
              <PurchaseRequestItem key={index} {...item} />
            ))}
          </div>
          <div className="row">
            {PurchaseRequestData.slice(2).map((item, index) => (
              <PurchaseRequestItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewCard;