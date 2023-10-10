import { useEffect, useState } from 'react'
import './App.css'
import NodeBox from './Components/NodeContainer/NodeBox'
import NewNodeForm from './Components/NodeUpdater/NewNodeForm'
import SelectedNode from './Components/SelectedNode/SelectedNode'

function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeList, setNodeList] = useState([
    {
      parent: [],
      child: [],
      value: "First"
    }
  ])
  // console.log(nodeList.filter(x=>x.parent.length==0 && x.child.length==0))
  function addNode(type, value){
    if(type=="Single"){
      console.log("adding single node")
      setNodeList(
        [
        ...nodeList,
        {
          parent: [],
          child: [],
          value: value
        }
      ]
      )
    }
  }

  function deletedSelected(){
    if(selectedNode){
      console.log("deleting : ",selectedNode)
      var newList = [...nodeList].slice(0,selectedNode.index).concat(nodeList.slice(selectedNode.index+1,))
      setNodeList(newList);
      setSelectedNode(null);
    }
  }
  useEffect(()=>{
    // console.log(nodeList.filter(x=>true))
  },[])
  

  return (
    <>
    <div className="mainContainer">
      <NewNodeForm addNode={addNode}/>
      <SelectedNode selectedNode={selectedNode} deleteSelected={deletedSelected}/>
      <div className="boxContainer">
        <div className='singleNodes' style={{display:'grid'}}>
          {nodeList.filter(x=>x.parent.length==0 && x.child.length==0).map((n,index)=><NodeBox value={n.value} selfObject={n} setSelectedNode={setSelectedNode} index={index} key={index}/>)}
        </div>
        {/* <NodeBox value={"H"}/> */}
      </div>
    </div>
    </>
  )
}

export default App
