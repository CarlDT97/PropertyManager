import React from "react";
import AppNavBar from "../components/appNavBar";
import PropertyCard from "../components/propertyCard";
import TableApartments from "../components/apartmentList";
const ApartmentsView: React.FC = () => {
  return (
    <div>
      <div>
        <AppNavBar>
          <div className="table">
        <TableApartments />
      </div></AppNavBar>
      </div>
      
    </div>
  );
};

export default ApartmentsView;
