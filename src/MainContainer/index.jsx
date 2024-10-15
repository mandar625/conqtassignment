import React, { useState } from "react";
import "./maincontainer.css";
import ItemForm from "./components/ItemForm";
import SupplierForm from "./components/SupplierForm";
import useGetCountryList from "./hooks/useGetCountryList";

const MainContainer = () => {
    const { countryData } = useGetCountryList
    const [isItemCheckBoxChecked, setIsItemCheckBoxChecked] = useState(false);
    const [isSuplleirCheckBoxChecked, setSuplleirCheckBoxChecked] = useState(false);
    const [formData , setFormData] = useState({
        itemName:"",
        quantity:"",
        unitPrice:"",
        currency:"",
        submissionDate:"",
        supplierName:"",
        companyName:"",
        email:"",
        phoneCode:"",
        phoneNumber:"" ,
        countryId:"",
        stateId:"",
        cityId:"",

    })

    const handleItmCheckBox = (e) => {
        setIsItemCheckBoxChecked(e.target.checked);
    };

    const handleSupplierChecBox = (e) => {
        setSuplleirCheckBoxChecked(e.target.checked);
    };
    const handleInputChanges = (e)=>{
            const {name , value} = e.target;
            setFormData({...formData , [name]:value})
    }
    const handleSubmit = ()=>{

    }
    return (
        <div className="maincontainer-body">
            <div className="main-header">
                <span>Inventory Management System</span>
            </div>

            <div className="checbox-container">
                <input
                    type="checkbox"
                    checked={isItemCheckBoxChecked}
                    onChange={handleItmCheckBox}
                />
                <label>Item</label>
                <input
                    type="checkbox"
                    checked={isSuplleirCheckBoxChecked}
                    onChange={handleSupplierChecBox}
                />
                <label>Supplier</label>
            </div>

            <div className="form-container">
                <form onSubmit={handleSubmit}>

                 <div>{isItemCheckBoxChecked && <ItemForm  handleInputChanges={handleInputChanges} formData={formData} />}</div>
                 <div>{isSuplleirCheckBoxChecked && <SupplierForm />}</div>

                  <button type="submit"> Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MainContainer;
