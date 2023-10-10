import style from "./SelectedNode.module.css"

function SelectedNode(props) {
  return (
    <div className={style.nodeSelected}>
        <span>Selected node</span>
        <span>{props.selectedNode ? props.selectedNode.obj.value : "None"}</span>
        <button>Update</button>
        <button onClick={props.deleteSelected}>Delete</button>
    </div>
  )
}

export default SelectedNode