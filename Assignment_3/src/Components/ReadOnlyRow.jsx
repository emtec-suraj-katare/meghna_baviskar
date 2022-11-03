import React from 'react';
import {Button} from 'react-bootstrap'

const ReadOnlyRow = ({post, handleEditClick, handleDeleteClick}) => {
  return (

         <tr>
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.address}</td>
            <td>{post.rating}</td>
            <td>{post.email}</td>
            <td>
                <Button variant="primary" type="button" onClick={(e) => handleEditClick(e, post)}>Update</Button>
                <Button variant="danger" type="button" onClick={(e) => handleDeleteClick(e, post)}>Delete</Button>
            </td>
        </tr> 

      
  
  )
}

export default ReadOnlyRow
