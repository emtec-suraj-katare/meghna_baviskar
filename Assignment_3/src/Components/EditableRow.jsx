import React from 'react';
import './CSS/post.css';

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
   <div>
        <td><input type="text" name="id" placeholder="Enter id" value={editFormData.id} onChange={handleEditFormChange} required /></td>

        <td> <input type="text" name="name" placeholder="Enter name" value={editFormData.name} onChange={handleEditFormChange} required /></td>
      
        <td><input type="text" name="title" placeholder="Enter title" value={editFormData.title} onChange={handleEditFormChange} required /></td>

        <td> <input type="text" name="body" placeholder="Enter body" value={editFormData.body} onChange={handleEditFormChange} required /> </td>

        <td>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelClick}>Cancel</button>
        </td>
    </div>
  )
}

export default EditableRow
