function structureTreeData(data, parent) {
    let result = [];
  
    for (let i = 0; i < data.length; i++) {
      if (data[i].parent_id === parent) {
        let children = structureTreeData(data, data[i].id);
  
        if (children.length > 0) {
          data[i].children = children;
        }
  
        result.push(data[i]);
      }
    }
  
    return result;
  }


 const rawData = [
  { id: 1, name: 'miza', parent_id: null },
  { id: 2, name: 'montaza', parent_id: 1 },
  { id: 3, name: 'brusenje', parent_id: 1 },
  { id: 4, name: 'lakiranje', parent_id: 1 },
  { id: 5, name: 'osnovna plošča', parent_id: 2 },
];
  
  const tree = structureTreeData(rawData,null);

  console.log(tree[0]);