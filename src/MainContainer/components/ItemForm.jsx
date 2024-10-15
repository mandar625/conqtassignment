import React from "react";

const ItemForm = ({ formData , handleInputChanges}) => {
  return (
    <div>

        <label>Item Name</label>
        <input type="text" value={formData.itemName}  onChange={handleInputChanges} />
        <label htmlFor=""> Qunatity</label>
        <input type="number" value={formData.quantity}  onChange={handleInputChanges}/>
        <label htmlFor="">Unit Price</label>
        <input type="number" value={formData.unitPrice}  onChange={handleInputChanges}/>
        <label htmlFor="">Date of Submission</label>
        <input type="date" value={formData.submissionDate} onChange={handleInputChanges} />

    </div>
  );
};

export default ItemForm;
