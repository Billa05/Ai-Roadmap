import { document } from 'postcss';
import React from 'react';
import Tree from 'react-d3-tree';

const data = {
  name: 'CEO',
  children: [
    {
      name: 'Manager',
      attributes: {
        department: 'Production',
      },
      children: [
        {
          name: 'Foreman',
          attributes: {
            department: 'Fabrication',
          },
          children: [
            {
              name: 'Worker',
            },
          ],
        },
        {
          name: 'Foreman',
          attributes: {
            department: 'Assembly',
          },
          children: [
            {
              name: 'Worker',
            },
          ],
        },
      ],
    },
  ],
};

export default function Branching() {
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
