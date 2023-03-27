import React, { MouseEventHandler, ReactElement } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencil, faEye, faUserCircle, faFileText, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPencil, faEye, faUserCircle, faFileText, faBuilding);

export interface CompositeTileProps {
  type: 'intervenants' | 'etudes' | 'entreprises';
  nom: string;
  titles: { id: string; text: string; value: string; }[];
  handleEyeClick: MouseEventHandler;
  handleEditClick: MouseEventHandler;
}

export default function CompositeTile({ type,
  nom,
  titles,
  handleEyeClick,
  handleEditClick }: CompositeTileProps): ReactElement {
  const getIcon = () => {
    switch (type) {
    case 'intervenants':
      return faUserCircle;
    case 'etudes':
      return faFileText;
    case 'entreprises':
      return faBuilding;
    default:
      return faUserCircle;
    }
  };
  return (
    <div className="composite-tile">
      <div className="composite-tile-title">
        <div className="composite-tile-title-left"><FontAwesomeIcon icon={getIcon()} size="xl" className="composite-tile-icon" /><h2 className="composite-tile-name">{ nom }</h2></div>
        <div className="composite-tile-title-right">
          <button type="button" aria-label="Edit" onClick={handleEditClick}><FontAwesomeIcon icon="pencil" className="fa-xl" /></button>
          <button type="button" aria-label="Eye" onClick={handleEyeClick}><FontAwesomeIcon icon="eye" className="fa-xl" /></button>
        </div>
      </div>
      <hr />
      <div>
        {titles.map(title => (
          <div className="rows" key={title.id}>
            <span>{title.text}</span>
            <span className="rows-text">{title.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
