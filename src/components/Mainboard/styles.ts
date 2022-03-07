export const mainBoardStyle = {
  paddingTop: '3rem',
};

export const gridStyle = {
  display: 'flex',
  justifyContent: 'center',
};

export const cardStyle = {
  width: '33rem',
  height: '18rem',
  cursor: 'pointer',
};

export const sideStyle = {
  backgroundColor: '#fff',
  borderRadius: '1rem',
  fontWeight: 600,
  fontSize: '1.4rem',
  boxShadow: '0px 0px 4px 3px #6296ea',
  textAlign: 'center',
  fontFamily: 'Courier New',
};

export const sideStyleDark = {
  backgroundColor: 'rgba(255, 178, 91, 0.25);',
  borderRadius: '1rem',
  boxShadow: '0px 0px 4px 3px #FFB25B',
};

export const titleStyle = {
  fontWeight: 600,
  fontSize: '1.4rem',
  marginBottom: '1rem',
  textAlign: 'center' as const,
  fontFamily: 'Courier New',
};

export const imageStyle = (img: string) => {
  return {
    backgroundImage: `url(${img})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '80%',
  };
};
