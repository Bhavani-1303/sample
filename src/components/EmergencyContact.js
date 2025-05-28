import React from 'react';

function EmergencyContact() {
  // Sample employee data
  const employee = {
    name: "Jane Doe",
    id: "EMP12345",
    department: "Engineering"
  };

  return (
    <div className="emergency-contact-page">
      <h2>Emergency Contact Information</h2>

      <h3>Employee Details</h3>
      <p>Name: {employee.name}</p>
      <p>Employee ID: {employee.id}</p>
      <p>Department: {employee.department}</p>

      <h3>Emergency Contacts</h3>
      <p>Emergency Hotline: 123-456-7890</p>
      <p>Security Desk: 987-654-3210</p>
      <p>Local Police: 911 (or relevant local number)</p>
      <p>Fire Department: 911 (or relevant local number)</p>
    </div>
  );
}

export default EmergencyContact;
