type PageProps = {name: string, path: string, query: Record<string, string>};

export class Page {
    name: string;
    path: string;
    query: Record<string, any>;
    pageContainer: HTMLDivElement;

    constructor({ name, path, query }: PageProps) {
        this.name = name;
        this.path = path;
        this.query = query;

        this.pageContainer = document.createElement('div');
        this.pageContainer.classList.add(`page`);
        this.pageContainer.classList.add(`page-${this.name}`);
    }

    render(): HTMLElement | HTMLElement[] {
        return [];
    }

    renderPage(): HTMLElement {
        this.pageContainer.innerHTML = "";

        const pageBody = this.render();
        if (Array.isArray(pageBody)) {
            for (let child of pageBody) {
                this.pageContainer.append(child);
            }
        } else {
            this.pageContainer.append(pageBody);
        }

        return this.pageContainer;
    }
}

export default Page;
