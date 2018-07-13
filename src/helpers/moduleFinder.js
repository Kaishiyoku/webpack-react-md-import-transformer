const moduleFinder = (importName) => (item) => item.originalComponent ? item.originalComponent === importName : item.component === importName;

export default moduleFinder;