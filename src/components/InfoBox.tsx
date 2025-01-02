import React, { FC, type ReactNode } from 'react';

// We want severity when it's on warning mode and for other two mode -> it's optional
// Use descriminiated union

type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
};

type WarningBoxProps = {
  mode: 'warning';
  severity?: 'low' | 'medium' | 'high'; // optional
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox: FC<InfoBoxProps> = (props) => {
  const { children, mode } = props;

  if (mode === 'hint') {
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>
      </aside>
    );
  }

  // we can set severity here because we are pass hintboxprops
  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
