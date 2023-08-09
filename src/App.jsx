import './App.css';
import { useState,useEffect } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";



export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contact, setContact] = useState(null);

  const fetchContact = async () => {
    try {
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
      const data = await response.json();
      setContact(data);
    } catch (error) {
      console.error("Error fetching contact:", error);
    }
  };
  
  useEffect(() => {
    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);
  

  return (
    <>
      {selectedContactId ? (
        <SelectedContact contactId={selectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}
