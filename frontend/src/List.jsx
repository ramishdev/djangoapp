function List(props){
  return (
      <div className="note">
        <p> created: {props.c.created} </p>
        <p> title: {props.c.title} </p>
        <p > text: {props.c.text}</p>
      </div>
  )
}

export default List;