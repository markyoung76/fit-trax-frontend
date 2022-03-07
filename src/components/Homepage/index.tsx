import React from 'react';
import Mainboard from '../Mainboard';

type props = {
  isLight: boolean;
};
export default function Homepage({ isLight }: props) {
  return <Mainboard theme={isLight} />;
}
