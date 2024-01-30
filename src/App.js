import React, { useEffect, useState } from "react";
import './App.css';
import SideBar from './components/sidebar/sidebar.component'
import EmailBody from './components/emailbody/emailbody.component'
import axios from 'axios';

function App() {
  const [emails, setEmails] = useState([]);
  const activeFolderName = "Inbox";
  const [searchInput, setSearchInput] = useState("");
  const [activeEmail, setActiveEmail] = useState({});
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [active, setActive] = useState(-1);

  // axios fetch emails (from monsters tutorial)
  useEffect(() => {
    const fetchEmails = async () => {
        const response = await axios.get('https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json',
      );
      setEmails(response.data);
    };

    fetchEmails();
  }, []);

  // filter search (from monsters tutorial)
  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
      filtered = emails
    } else {
      filtered = emails.filter(email =>
        email.subject.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    setFilteredEmails(filtered);
  }, [emails, searchInput]);

  // handle searchbar input (from monsters tutorial)
  const handleInput = e => {
    setSearchInput(e.target.value)
    };
  
  // handle clicking email cards
  const handleClick = (email) => {
    email.read = 'true';
    setActiveEmail(email);
    setActive(email.id);
  }

  return (
    <div className="App">
      <SideBar emails={filteredEmails} 
        activeFolderName={activeFolderName} 
        handleInput={handleInput}
        handleClick={handleClick}
        active={active}
        />
      <EmailBody activeEmail={activeEmail}/>
    </div>
  );
}

export default App;
