export const mainBoardStyle = {
  paddingTop: '4rem',
};

export const gridStyle = {
  display: 'flex',
  justifyContent: 'center',
  paddingLeft: '0',
};

export const cardStyle = {
  width: ' 22rem',
  height: '12rem',
  cursor: 'pointer',
};

export const sideStyle = {
  backgroundColor: '#fff',
  borderRadius: '1rem',
  boxShadow: '0px 0px 4px 3px #6296ea',
};
export const sideStyleDark = {
  backgroundColor: 'rgba(255, 178, 91, 0.25);',
  borderRadius: '1rem',
  boxShadow: '0px 0px 4px 3px #FFB25B',
};

export const titleStyle = {
  fontWeight: 600,
  marginBottom: '1rem',
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
