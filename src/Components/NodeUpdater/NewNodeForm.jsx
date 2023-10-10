import { useRef } from "react";
import style from "./NewNodeForm.module.css"


function NewNodeForm(props) {
    const nodeType = useRef(null);
    const nodeValue = useRef(null);

    function addNode(){
        //checking to be implemented here
        props.addNode(nodeType.current.value, nodeValue.current.value)
    }

  return (
    <div className={style.form}>
        <span>Node type</span>
        <select ref={nodeType}>
            <option value="Single">Single</option>
            <option value="Parent">Parent</option>
            <option value="Child">Child</option>
        </select>
        <span>Node type</span>
        <input type="text" ref={nodeValue}/>
        <button onClick={addNode}>Add Node</button>
    </div>
  )
}

export default NewNodeForm