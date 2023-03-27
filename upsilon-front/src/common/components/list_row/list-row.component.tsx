import React, { MouseEventHandler, ReactElement } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencil, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPencil, faEye);

export interface ListRowProps {
  rows: { id: string; text: string; }[];
  handleEyeClick: MouseEventHandler;
  handleEditClick: MouseEventHandler;
}

export default function ListRow({ rows, handleEditClick, handleEyeClick }: ListRowProps): ReactElement {
  return (
    <div className="horizontal-row">
      {rows.map(row => (
        <div className="horizontal-row-item" key={row.id}>
          {row.text}
        </div>
      ))}
      <button type="button" aria-label="Edit" onClick={handleEditClick}><FontAwesomeIcon icon="pencil" size="xl" className="horizontal-row-icon-pen" /></button>
      <button type="button" aria-label="Eye" onClick={handleEyeClick}><FontAwesomeIcon size="xl" icon="eye" className="horizontal-row-icon-eye" /></button>
    </div>
  );
}
