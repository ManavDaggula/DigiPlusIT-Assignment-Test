import style from "./NodeBox.module.css"

function NodeBox(props) {
  function setSelection(){
    props.setSelectedNode({
      index: props.index,
      obj: props.selfObject
    })
  }

  return (
    <div className={style.box} onClick={setSelection}>
        {props.value}
    </div>
  )
}

export default NodeBox