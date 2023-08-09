import React, { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  const fetchContact = async () => {
    try {
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
      const data = await response.json();
      setContact(data);
    } catch (error) {
      console.error("Error fetching contact:", error);
    }
  };

  console.log("Selected Contact:", contact); // Observe the data in the console

  return (
    <div>
      {contact ? (
        <div>
          <h2>Contact Details</h2>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </div>
      ) : (
        <div>No contact selected.</div>
      )}
    </div>
  );
}
