// Import necessary dependencies from React
import  { useState, useEffect } from "react";

// Define the SelectedContact component
// Initialize a state variable 'contact' to store contact data
export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  // Use the useEffect hook to fetch contact data when 'selectedContactId' changes
  // Check if 'selectedContactId' has a value
  // Call the 'fetchContact' function to retrieve contact data
  useEffect(() => {
    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  // Define the fetchContact function to fetch contact data from the API
  // Fetch contact data from the API using the URL
  // Update the 'contact' state with the fetched data
  // Handle errors by logging an error message
  const fetchContact = async () => {
  try {
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
      const data = await response.json();
      setContact(data);
    } catch (error) {
      console.error("Error fetching contact:", error);
    }
  };

  // Output the fetched contact data to the console for observation
  console.log("Selected Contact:", contact); 

  // Render the component's UI
  // Display a message if no contact is selected
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
