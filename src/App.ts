import "./index.scss";
import Router from './route';

var __app: App;
var __router: Router;
(function() {
    window.addEventListener('load', function() {
        __router = new Router();
        __app = new App();
        setTimeout(() => {
            __app.render();
        }, 2000);
    });
})();

class App {
    rootDOM: HTMLDivElement;

    constructor() {
        this.setup();
    }

    setup() {
        this.setRoot();
    }
    
    setRoot() {
        const root = document.querySelector<HTMLDivElement>('div#root');
        if (root) {
            this.rootDOM = root;
            return;
        }
        setTimeout(() => {
            this.setRoot();
        }, 200);
    }

    getPage(pathName: string) {
        return __router.getPage(pathName);
    }

    getQuery() {
        return __router.getQuery();
    }
    
    render() {
        const pathName = location.pathname;
        const { name, path, component } = this.getPage(pathName);
        const query = this.getQuery();
        
        const pageProps = { name, path, query };
        const pageElement = new component(pageProps);
        
        const pageDOM = pageElement.renderPage();
        this.rootDOM.querySelector<HTMLDivElement>('div#page-loader').style.display = 'none';
        this.rootDOM.querySelector<HTMLDivElement>('div#page-container').append(pageDOM);
    }
}