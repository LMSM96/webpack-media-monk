import HomePage from './app/pages/home/index';
import NotFoundPage from './app/pages/not-found/index';

type Route = {
    name: string;
    path: string;
    component: any;
}

const route: Route[] = [
    {
        name: 'home',
        path: '/',
        component: HomePage
    },
];

class Router {
    getQuery() {
        const queryString = location.search; // Returns:'?q=123'
        // Further parsing:
        const params: URLSearchParams = new URLSearchParams(queryString);
        const query: Record<string, string> = {};
        for (const [key, value] of params.entries()) {
            query[key] = value;
        }
        return query;
    }
    
    getPage(path: string) {
        for (let r of route) {
            if (r.path == path) {
                return r;
            }
        }

        return {
            name: '404',
            path: "*/*",
            component: NotFoundPage,
        };
    }
}

export default Router;

