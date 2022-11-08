import React, {useState} from 'react'; 
import styles from './TodoDeleteV2.module.css' 

const {input, submitBtn} = styles

const ItemForm = (props) => {
  const initialFormState = { id: null, name: '' }
  const [item, setItem] = useState(initialFormState)

  const handleInputChange = (ev) => {
    const { name, value } = ev.target
  
    setItem({ ...item, [name]: value })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    if (!item.name || !item.name.replaceAll(' ', '')) return
    props.addItem(item)
    setItem(initialFormState)
  }

  return (
    <div className="ItemForm">
      <form onSubmit={handleSubmit}>
        <label>Enter Item</label> <br />
        <input
          type="text"
          className={input}
          name="name"
          value={item.name}
          onChange={handleInputChange}
        />
        <br />
        <button className={submitBtn}>Add new item</button>
      </form>
    </div>
  );
}

export default ItemForm;
