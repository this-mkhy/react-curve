import React, {useState} from 'react'; 
import './TodoDeleteV2.css' 

const ItemForm = (props) => {
  const initialFormState = { id: null, name: '' }
  const [item, setItem] = useState(initialFormState)

  const handleInputChange = (ev) => {
    const { name, value } = ev.target
  
    setItem({ ...item, [name]: value })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (!item.name) return
    props.addItem(item)
    setItem(initialFormState)
  }

  return (
    <div className="ItemForm">
      <form onSubmit={handleSubmit}>
        <label>Enter Item</label> <br />
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleInputChange}
        />
        <br />
        <button className="submitBtn">Add new item</button>
      </form>
    </div>
  );
}

export default ItemForm;
