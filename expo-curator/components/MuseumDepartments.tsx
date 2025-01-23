import React, { useEffect, useState } from "react";
//import { getDepartments } from "../utils/api";
import { fetchDepartments } from "../utils/api";

// Define types for the department and the API response
interface Department {
  departmentId: number;
  displayName: string;
 // description: string;
}

interface DepartmentResponse {
  departments: Department[];
}

interface Error {
  msg: string;
}

const MuseumDepartments: React.FC = () => {
  // Define state types
  const [museumDepartments, setMuseumDepartments] = useState<Department[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchDepartments()
    .then((res: any) => {
      // Corrected: Now we directly set res.departments which is the array of Department
      setMuseumDepartments(res); // Correctly passing the array of departments
     
      setIsLoading(false);
      })
      .catch((err: any) => {
        // If you have more specific error structure, you can type it accordingly
        setError(err.response?.data || { msg: "An error occurred" });
      });
  }, []);

  if (error) {
    return <p>Error Message: {error.msg}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{
      width: '500px',
      height: '200px',
      overflowY: 'scroll' ,// Show scrollbar if content overflows
      border: '1px solid black',
      marginTop: '20px',
    }}>
      
        <h3>Departments</h3>
            <ul>
          {museumDepartments.map((department1,index) => (
            <li key={index}>
              {/* {department1.departmentId} */}
             <p>Department Id {department1.departmentId}</p>
             <p> department name {department1.displayName}</p>
             </li>
          ))}
        </ul>
     
    </div>
  );
};

export default MuseumDepartments;
