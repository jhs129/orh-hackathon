import React from 'react';

function ListItem (props) {

    return (
        <li className="w-80 md:w-64">
        <a className="pr-2" href={props.href}>
          {props.text}
        </a>
      </li>
    );    
};

export default ListItem;