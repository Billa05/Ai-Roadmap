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
    <div id="treeWrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}>
      <Tree data={data} orientation='vertical' zoomable={false} draggable={true} />
    </div>
  );
}
