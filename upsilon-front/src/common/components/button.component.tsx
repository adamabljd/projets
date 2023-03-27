import React, { MouseEventHandler, ReactElement } from 'react';
import classNames from 'classnames';

export type ButtonVariantType = 'primary' | 'secondary' | 'tertiary';
export interface ButtonProps {
  onClick: MouseEventHandler;
  label: string;
  variant: ButtonVariantType;
}

export default function Button({ onClick: handleOnClick, label = 'button', variant }: ButtonProps): ReactElement {
  return <button type="button" onClick={handleOnClick} className={classNames('button-component', variant)}>{label}</button>;
}






