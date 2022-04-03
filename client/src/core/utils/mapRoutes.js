
const mapRoutes = (routes) => {
    const flatRoutes = flattenRoutes(routes);
    
    return [createViewMap(flatRoutes), flatRoutes];
}

function flattenRoutes(routes) {
   return routes.map(r => r.children ? [r, ...r.children] : r).flat();
}

function createViewMap(routes) {
    const viewMap = new Map();
    routes.map(r => viewMap.set(r.name, r.component));
    return Object.fromEntries(viewMap);
}

export default mapRoutes;