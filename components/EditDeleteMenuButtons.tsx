import { useState } from 'react';

interface EditDeleteMenuButtonProps {
    onEdit: () => void;
    onDelete: () => void;
  }
  
  export default function EditDeleteMenuButton({ onEdit, onDelete }: EditDeleteMenuButtonProps) {
    const [showMenu, setShowMenu] = useState(false);
  
    const handleMenuClick = () => setShowMenu(!showMenu);
  
    const handleEditClick = () => {
      setShowMenu(false);
      onEdit();
    };
  
    const handleDeleteClick = () => {
      setShowMenu(false);
      onDelete();
    };
  
    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="editDeleteMenu"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={handleMenuClick}
        >
          ...
        </button>
        <div className={`dropdown-menu ${showMenu ? 'show' : ''}`} aria-labelledby="editDeleteMenu">
          <button className="dropdown-item" type="button" onClick={handleEditClick}>
            Edit
          </button>
          <button className="dropdown-item" type="button" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    );
  }
  