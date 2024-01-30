import CardList from '../cardlist/cardlist.component'
import SearchBar from "../searchbar/searchbar.component";

import "./sidebar.styles.css";

const SideBar = ({ activeFolderName, emails, handleInput, handleClick, active }) => {
    return (
        <div className='sidebar-container'>
            <h1>{activeFolderName}</h1>
            <SearchBar placeholder='Search <subject>' handleInput={handleInput}/>
            <CardList emails={emails}  handleClick={handleClick} active={active}/>
        </div>
    );
};

export default SideBar;