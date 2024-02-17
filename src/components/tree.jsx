import { document } from 'postcss';
import React from 'react';
import Tree from 'react-d3-tree';
import { useState } from 'react';

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
            progress: "100%",
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
            progress: "100%",
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

  const [selectedNode, setSelectedNode] = useState(false);

  const handleOnClick = () => {
    setSelectedNode(true);
  };

  return (
    <div id="treeWrapper" style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
      <Tree 
        data={data} 
        orientation='vertical' 
        zoomable={false} 
        draggable={false} 
        collapsible={false}
        translate={{ x: window.innerWidth / 2, y: 50 }} // Adjust y value as needed
        translateExtent={[
          [0, 0],
          [window.innerWidth, window.innerHeight]
        ]}
        onNodeClick={handleOnClick}
      />
      {selectedNode && (
            <div className="fixed z-10 inset-0 overflow-y-auto" onClick={() => setSelectedNode(false)}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" onClick={(e) => e.stopPropagation()}>
                        <h1>Node</h1>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}