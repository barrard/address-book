import React, { useEffect, useState } from "react";
import Context from "../Context";
import { FullScreenContainer } from "./styled";
import SideBar from "./SideBar";
import Details from "./Details";
import uuid from "react-uuid";

const blankContact = () => ({
  id: uuid(),
  fName: "",
  lName: "",
  emails: [],
  saved: false,
});
export default function AddressBook() {
  const [edits, setEdits] = useState(false);
  const [addNew, setAddNew] = useState(false);
  const [contacts, setContacts] = useState({});
  const [filterContacts, setFilterContacts] = useState({});
  const [selectedContact, setSelectedContact] = useState(blankContact());
  const [emailEdits, setEmailEdits] = useState(false);

  //Details form state
  const [id, setId] = useState(selectedContact.id);
  const [fName, setFName] = useState(selectedContact.fName);
  const [lName, setLName] = useState(selectedContact.lName);
  const [emails, setEmails] = useState(selectedContact.emails);
  const [newEmail, setNewEmail] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    //get from local store
    let contacts = JSON.parse(localStorage.getItem("contacts"));
    setContacts({ ...contacts });
    setFilterContacts({ ...contacts });
  }, []);

  //Search events
  useEffect(() => {
    let foundContacts = {};

    Object.entries(contacts).forEach(([id, contact]) => {
      let { fName, lName, emails } = contact;
      //find names that start with search
      if (fName.toLowerCase().includes(search.toLowerCase())) {
        foundContacts[id] = contact;
      }
      if (lName.toLowerCase().includes(search.toLowerCase())) {
        foundContacts[id] = contact;
      }

      //find emails that include
      emails.forEach((email) => {
        if (email.toLowerCase().includes(search.toLowerCase())) {
          foundContacts[id] = contact;
        }
      });
    });
    setFilterContacts(foundContacts);
  }, [search, contacts]);

  // sets local state whenever selectedContact updates
  useEffect(() => {
    setFName(selectedContact.fName);
    setLName(selectedContact.lName);
    setEmails([...selectedContact.emails]);
    setId(selectedContact.id);
  }, [selectedContact]);

  useEffect(() => {
    if (selectedContact.edits) return;
    setSelectedContact({ ...selectedContact, edits: true });
  }, [emails, fName, lName, selectedContact]);

  const validateContact = (contact) => {
    let _fName = fName.trim();
    let _lName = lName.trim();
    if (!_fName) return alert("Contact needs a First Name");
    if (!_lName) return alert("Contact needs a Last Name");
    return true;
  };

  const deleteContact = (id) => {
    if (
      window.confirm(
        `Are you sure you want to delete ${selectedContact.fName} ${selectedContact.lName} from your contacts?`
      )
    ) {
      delete contacts[selectedContact.id];
      setContacts({ ...contacts });
      setSelectedContact(blankContact());
    }
  };

  const saveContact = (contact) => {
    if (!validateContact(contact)) return;
    //validate
    contacts[id] = {
      id,
      fName: fName.trim(),
      lName: lName.trim(),
      emails,
      saved: true,
      edits: false,
    };

    setSelectedContact({ ...contacts[id] });
    setContacts({ ...contacts });
    setAddNew(false);
    setEdits(false);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    alert(`Saved contact ${fName} ${lName}`);
  };

  const createNewContact = () => {
    setSelectedContact(blankContact());
  };

  return (
    <Context.Provider
      value={{
        addNew,
        contacts,
        createNewContact,
        deleteContact,
        edits,
        emails,
        emailEdits,
        filterContacts,
        fName,
        lName,
        newEmail,
        selectedContact,
        saveContact,
        search,
        setAddNew,
        setEdits,
        setEmailEdits,
        setEmails,
        setFName,
        setLName,
        setNewEmail,
        setSearch,
        setSelectedContact,
      }}
    >
      <FullScreenContainer>
        <SideBar />
        <Details />
      </FullScreenContainer>
    </Context.Provider>
  );
}
