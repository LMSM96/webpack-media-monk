import './index.scss';
import { Page } from "../../types/pages";
import SliderImage from "./../../../assets/images/background.jpg";
import MonkLogo from "./../../../assets/images/logo.svg";

class HomePage extends Page {
    stageIdx: number;
    stageDetailCtn: HTMLDivElement;
    stageLeftControl: HTMLDivElement;
    stageRightControl: HTMLDivElement;
    stageTrackControl: HTMLDivElement;
    sliderBGImage: HTMLImageElement;

    slideStages: Record<number, {
        content: string;
        row: 0|1|2|3|4|5|6|7|8;
        align: 'left' | 'right';
        bgTransformX: number;
    }[]>;

    constructor(props: any) {
        super(props);
        this.stageIdx = 0;
        this.slideStages = {
            0: [
                {
                    content: `
                        <span>we are breaking</span>
                        <span>our vow</span>
                        <span>of silence</span>
                    `,
                    row: 0,
                    align: 'left',
                    bgTransformX: 0,
                },
            ],
            1: [
                {
                    content: `
                        <span>talen is given</span>
                        <span>true skill is</span>
                        <span>earned</span>
                    `,
                    row: 4,
                    align: 'left',
                    bgTransformX: -11,
                },
            ],
            2: [
                {
                    content: `
                        <span>be flexible to</span>
                        <span>change and</span>
                        <span>sturdy in</span>
                        <span>conviction</span>
                    `,
                    row: 4,
                    align: 'left',
                    bgTransformX: -19,
                },
            ],
            3: [
                {
                    content: `
                        <span>use many skills</span>
                        <span>yet work as one</span>
                    `,
                    row: 4,
                    align: 'right',
                    bgTransformX: -30.7,
                },
            ],
            4: [
                {
                    content: `
                        <span>to master</span>
                        <span>anything find</span>
                        <span>interest in</span>
                        <span>everything</span>
                    `,
                    row: 4,
                    align: 'right',
                    bgTransformX: -42.2,
                },
            ],
            5: [
                {
                    content: `
                        <span>individual</span>
                        <span>flourish</span>
                        <span>if culture</span>
                        <span>and wisdom</span>
                        <span>are shared</span>
                    `,
                    row: 3,
                    align: 'right',
                    bgTransformX: -54,
                },
            ],
            6: [
                {
                    content: `
                        <span>train for</span>
                        <span>perfection but</span>
                        <span>aim for more</span>
                    `,
                    row: 4,
                    align: 'left',
                    bgTransformX: -66.1,
                },
            ],
            7: [
                {
                    content: `
                        <span>take pride in your</span>
                        <span>work but do not</span>
                        <span>seek praise</span>
                    `,
                    row: 4,
                    align: 'left',
                    bgTransformX: -83.1,
                },
            ],
            8: [
                {
                    content: `
                        <span>temporary</span>
                        <span>sacrifice brings</span>
                        <span>lasting results</span>
                    `,
                    row: 4,
                    align: 'left',
                    bgTransformX: -83.1,
                },
            ],
            9: [
                {
                    content: `
                        <span>become a monk</span>
                        <span></span>
                        <span></span>
                    `,
                    row: 0,
                    align: 'right',
                    bgTransformX: -95.5,
                },
                {
                    content: `z
                        <span class="span-style-2" >Interested in joining our monastory?</span>
                        <span class="span-style-2" >Chack out our current opening on <a>mediamonks.com/careers</a>.</span>
                        <span style="height:20px;" ></span>
                        <span class="span-style-2" style="display: flex; align-items: flex-end;" >
                            <div style="display: block; width: 16px; height: 16px; fill: #fff;" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7l8-5V6l-8 5l-8-5v2Z"/></svg>
                            </div>
                            <span class="span-style-2" style="margin-left: 4px; margin-right: 10px;" >Mail ons</span>
                            <div style="display: block; width: 16px; height: 16px; fill: #fff;" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"/></svg>
                            </div>
                            <span class="span-style-2" style="margin-right: 10px" >Facebook</span>
                            <div style="display: block; width: 16px; height: 16px; fill: #fff;" >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 3a2 2 0 0 1 2 2v3h6a2 2 0 1 1 0 4h-6v2a3 3 0 0 0 3 3h3a2 2 0 1 1 0 4h-3a7 7 0 0 1-7-7V5a2 2 0 0 1 2-2Z" clip-rule="evenodd"/></svg>
                            </div>
                            <span class="span-style-2" >Twitter</span>
                        </span>
                    `,
                    row: 4,
                    align: 'right',
                    bgTransformX: -95.5,
                },
            ],
        };
    }

    addEventListeners() {
        this.stageLeftControl.addEventListener('click', (e) => {
            this.stageDetailCtn.firstElementChild.classList.add('remove');
            this.stageTrackControl.querySelector('span.stage-tracker-detail-span').classList.add('remove');

            setTimeout(() => {
                this.stageIdx--;
                this.setStageDetail();
            }, 400);
        });
        this.stageRightControl.addEventListener('click', (e) => {
            this.stageDetailCtn.firstElementChild.classList.add('remove');
            this.stageTrackControl.querySelector('span.stage-tracker-detail-span').classList.add('remove');

            setTimeout(() => {
                this.stageIdx++;
                this.setStageDetail();
            }, 400);
        });
        this.stageTrackControl.addEventListener('click', (e) => {
            const ele = e.target;
            console.log("stageTrackControl", e.target);
            if (ele instanceof Element && ele.hasAttribute('data-slider-stage')) {
                const stageLen = Object.keys(this.slideStages).length;
                const idx = parseInt(ele.getAttribute('data-slider-stage'));
                console.log(idx)
                if (idx>=0 && idx<stageLen) {
                    this.stageDetailCtn.firstElementChild.classList.add('remove');
                    this.stageTrackControl.querySelector('span.stage-tracker-detail-span').classList.add('remove');

                    setTimeout(() => {
                        this.stageIdx = idx;
                        this.setStageDetail();
                    }, 400);
                }

            }
        })
    }
    setStageDetail() {
        const stageLen = Object.keys(this.slideStages).length;
        const stage = this.slideStages[this.stageIdx];
        const stageDOM = document.createElement('div');
        stageDOM.classList.add("slider-stage");
        if (this.stageIdx == stageLen-1) {
            stageDOM.classList.add("slider-stage-become-monk");
        }

        stage.forEach((el) => {
            const elCtn = document.createElement('div');
            elCtn.classList.add("slider-stage-item");
            elCtn.style.top = `${(el.row*(100/9)).toFixed(2)}%`;
            elCtn.style.alignItems = el.align == 'right' ? "end" : "start";
            elCtn.innerHTML = el.content;
            stageDOM.append(elCtn);

            // Slider Background CSS
            this.sliderBGImage.style.transform = `translateX(${el.bgTransformX}%)`;
        });
        this.stageDetailCtn.innerHTML = "";
        this.stageDetailCtn.append(stageDOM)

        // Tracker CSS
        for (const ch of this.stageTrackControl.children) {
            ch.classList.remove("track-control-btn-active");
        }
        this.stageTrackControl.children[this.stageIdx].classList.add("track-control-btn-active");
        // Tracker details
        const stageTrackerDetailspan = this.stageTrackControl.querySelector('span.stage-tracker-detail-span');
        if (this.stageIdx > 0 && this.stageIdx < stageLen - 1) {
            stageTrackerDetailspan.innerHTML = `Step ${this.stageIdx} out of ${stageLen - 1} on the path of digital enlightment`;
        } else {
            stageTrackerDetailspan.innerHTML = ""
        }
        stageTrackerDetailspan.classList.remove('remove')

        const stageTrackerDetailspan2 = document.querySelector('div.site-breif') as HTMLElement;
        console.log("stageTrackerDetailspan2", stageTrackerDetailspan2)
        if (stageTrackerDetailspan2) {    
            stageTrackerDetailspan2.style.opacity = this.stageIdx > 0 ? "0" : "1";
        }

        // Control Btn CSS
        this.stageLeftControl.parentElement.style.display = this.stageIdx == 0 ? 'none' : 'flex';
        this.stageRightControl.parentElement.style.display = this.stageIdx == stageLen - 1 ? 'none' : 'flex';
        
    }

    getBgImgCtn() {
        const bg_img_ctn = document.createElement('div');
        bg_img_ctn.classList.add("background-image-ctn");

        const image = document.createElement('img');
        image.alt = "slider image";
        image.src = SliderImage;
        this.sliderBGImage = image;
        bg_img_ctn.append(image);

        return bg_img_ctn;
    }

    getLeftControlStageDetailRightControlCtn() {
        const leftControlStageDetailRightControlCtn = document.createElement('div');
        leftControlStageDetailRightControlCtn.classList.add("left-control-stage-detail-right-control-ctn");

        // LEFT
        const leftControlCtn = document.createElement('div');
        leftControlCtn.classList.add("control-btn-ctn");

        const leftControlBtn = document.createElement('div');
        leftControlBtn.classList.add("control-btn");
        leftControlBtn.classList.add("left-btn");
        leftControlBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="m19.031 4.281l-11 11l-.687.719l.687.719l11 11l1.438-1.438L10.187 16L20.47 5.719z"/>
        </svg>
        `;

        this.stageLeftControl = leftControlBtn;
        leftControlCtn.append(leftControlBtn);

        // DETAIL
        const detailCtn = document.createElement('div');
        detailCtn.classList.add("detail-ctn");
        detailCtn.classList.add("slider-stage-ctn");
        this.stageDetailCtn = detailCtn;

        // RIGHT
        const rightControlCtn = document.createElement('div');
        rightControlCtn.classList.add("control-btn-ctn");

        const rightControlBtn = document.createElement('div');
        rightControlBtn.classList.add("control-btn");
        rightControlBtn.classList.add("right-btn");
        rightControlBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M12.969 4.281L11.53 5.72L21.812 16l-10.28 10.281l1.437 1.438l11-11l.687-.719l-.687-.719z"/>
        </svg>
        `;

        this.stageRightControl = rightControlBtn;
        rightControlCtn.append(rightControlBtn);

        // APPEND
        leftControlStageDetailRightControlCtn.append(leftControlCtn);
        leftControlStageDetailRightControlCtn.append(detailCtn);
        leftControlStageDetailRightControlCtn.append(rightControlCtn);

        return leftControlStageDetailRightControlCtn;
    }

    getStageTrackControl() {
        const stageTrackControl = document.createElement('div');
        stageTrackControl.classList.add("stage-track-control");

        const stageLen = Object.keys(this.slideStages).length;
        for (let i=0; i<stageLen; i++) {
            const controlBtn = document.createElement('div');
            controlBtn.classList.add("control-btn");
            controlBtn.setAttribute('data-slider-stage', `${i}`);

            const span = document.createElement('span');
            span.setAttribute('data-slider-stage', `${i}`);
            span.innerText = (i == 0 || i == (stageLen-1)) ? "" : `${i}`;
            controlBtn.append(span);

            stageTrackControl.append(controlBtn);
        }

        const stageTrackerDetailspan = document.createElement('span');
        stageTrackerDetailspan.classList.add('stage-tracker-detail-span');
        stageTrackControl.append(stageTrackerDetailspan);

        this.stageTrackControl = stageTrackControl;
        return stageTrackControl;
    }

    getStageTrackControlIconCtn() {
        const stageTrackControlIconCtn = document.createElement('div');
        stageTrackControlIconCtn.classList.add("stage-track-control-icon-ctn");

        // LEFT
        const leftPanel = document.createElement('div');
        leftPanel.classList.add("left-pannel");

        const siteBreif = document.createElement('div');
        siteBreif.classList.add("site-breif");
        siteBreif.innerHTML = `
        <span>In January 2011, after a decade of digital, we open the doors to our temple.</span>
        <span>Follow our noble eightfold path to digital enlightment here.</span>
        `;
        leftPanel.append(siteBreif)

        const stageTrackControl = this.getStageTrackControl();
        stageTrackControlIconCtn.append(stageTrackControl);
        leftPanel.append(stageTrackControl)

        // RIGHT
        const rightPanel = document.createElement('div');
        rightPanel.classList.add("right-pannel");

        const icon = document.createElement('div');
        icon.classList.add("icon");

        const image = document.createElement('img');
        image.alt = "monk logo"
        image.src = MonkLogo;
        icon.append(image);
        rightPanel.append(icon);

        stageTrackControlIconCtn.append(leftPanel);
        stageTrackControlIconCtn.append(rightPanel);
        return stageTrackControlIconCtn;
    }

    getCtrlCtn() {
        const ctrlCtn = document.createElement('div');
        ctrlCtn.classList.add("controller-ctn");

        const leftControlStageDetailRightControlCtn = this.getLeftControlStageDetailRightControlCtn();
        ctrlCtn.append(leftControlStageDetailRightControlCtn);
        const stageTrackControlIconCtn = this.getStageTrackControlIconCtn();
        ctrlCtn.append(stageTrackControlIconCtn);

        return ctrlCtn;
    }

    render(): HTMLElement | HTMLElement[] {
        const pageBody: HTMLElement[] = [];

        const bgImgCtn = this.getBgImgCtn();
        pageBody.push(bgImgCtn);
        const ctrlCtn = this.getCtrlCtn();
        pageBody.push(ctrlCtn);

        this.setStageDetail();
        this.addEventListeners();

        return pageBody;
    }
}

export default HomePage;

