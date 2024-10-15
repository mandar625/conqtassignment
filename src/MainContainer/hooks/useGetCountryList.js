import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const useGetCountryList = () => {
  const [countryData, setCountryData] = useState(null);

  const getCountryDetails = async () => {
    try {
      const getResponse = await axios.get(
        "https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList"
      );
      setCountryData(getResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCountryDetails();
  }, []);
  return { countryData};
};

export default useGetCountryList;
