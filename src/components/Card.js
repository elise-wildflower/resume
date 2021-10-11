import React from 'react'

const Card = (props) => {
  return (
  <div styles={{...styles.container, flex: props.flex}}>
    <h1 style={styles.header}>{props.header}</h1>
    {props.children}
  </div>
  )
};
const styles = {
  header: {
    color: '#444'
  },

  container: {
    padding: '12px',
    borderRadius:'4px',
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
  }
}

export default Card