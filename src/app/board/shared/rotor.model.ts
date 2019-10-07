export class Rotor {
    readonly STEP: number = 1;
    readonly KEY: number = 0;

    id: string;
    ticks: number;
    state: number;
    steps: number = 0;

    constructor(attrs?: {
        id: string,
        ticks: number,
        state: number
    }) {
        if (attrs) {
            Object.assign(this, attrs);
            this.steps = this.state;
        };
    }

    rotate() {
        if (this.steps > 0) {
            if (this.state == this.ticks - 1)
                this.state = 0;
            else
                this.state += this.STEP;
        }
        this.steps += this.STEP;
    }
}