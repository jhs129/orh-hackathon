import React from 'react';
import { getDefaultContent } from './link-list-columns.content';
import ListItem from './list-item';

function LinkListColumns (props)  {
  // Define an array of hospital locations
  let links = props.links;

  if (!props.links) {
    links = getDefaultContent();
  }

  return (
    <div>
      <ul className="flex flex-wrap text-white pr-4 justify-between">
        {links.map((link, index) => (
            <ListItem text={link.text} href={link} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default LinkListColumns;
