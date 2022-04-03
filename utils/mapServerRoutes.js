
export function mapServerRoutes(routes, router, interceptor) {
    Object.keys(routes).forEach( r => {
        const [ method, route, controller] = routes[r];
        router[ method ](route, (req, res) => interceptor(req, res, controller))
    })
};