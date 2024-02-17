import { document } from 'postcss';
import React from 'react';
import Tree from 'react-d3-tree';

// data will be fetched from the backend
const data = {
  name: 'Full Stack Developer',
  children: [
    {
      name: 'Frontend',
      attributes: {
        progress: "66%",
      },
      children: [
        {
          name: 'Html',
          attributes: {
            progress: "80%",
          },
          children: [
            {
              name: 'projects',
            },
          ],
        },
        {
          name: 'CSS',
          attributes: {
            progress: "70%",
          },
          children: [
            {
              name: 'projects',
            },
          ],
        },{name:'JavaScript',attributes:{progress:"60%",},children:[{name:'Event handling'},{name:"Asynchronous programming"}],},
      ],
    },
  ],
};

export default function Branching() {
  
  // keep track of the current node
  // const [current, setCurrent] = useState("");

  return (
    <div id="treeWrapper" style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
      <Tree 
        data={data} 
        orientation='vertical' 
        zoomable={false} 
        draggable={false} 
        translate={{ x: window.innerWidth / 2, y: 50 }} // Adjust y value as needed
        translateExtent={[
          [0, 0],
          [window.innerWidth, window.innerHeight]
        ]}
      />
    </div>
  );
}
