function AddToList(props){
    return (
     <>
         <h3>List Works</h3>
         <input
             type="text"
             id="task"
             placeholder="Add a task"
             onChange={props.onInputChange}
         />
         <button type="button" onClick={props.onClickButton}>
             +
         </button>
     </>
    )
}

export default AddToList;