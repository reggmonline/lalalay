export default class InputHandler {
    constructor() {
        this.actions = [];
        window.addEventListener('keydown', e => {
            let action = '';
            switch(e.key) {
                case 'ArrowLeft':
                    action = 'move left';
                    break
                case 'ArrowRight':
                    action = 'move right';
                    break

                case 'ArrowDown':
                    action = 'sit down';
                    break

                case 'ArrowUp':
                    action = 'jump';
                    break
            }
            if (this.actions.indexOf(action) === -1) this.actions.push(action);
        });

        window.addEventListener('keyup', e => {
            let action = '';
            switch(e.key) {
                case 'ArrowLeft':
                    action = 'move left';
                    break

                case 'ArrowRight':
                    action = 'move right';
                    break

                case 'ArrowDown':
                    action = 'sit down';
                    break

                case 'ArrowUp':
                    action = 'jump';
                    break
            }
            this.actions = this.actions.filter(i => i != action);
        });
    }
}