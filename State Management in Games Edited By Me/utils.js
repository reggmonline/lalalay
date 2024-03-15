export function drawStatusText(context, input, player) {
    context.font = '28px Helvetica';
    context.fillText('Last input: ' + input.actions.at(-1), 20, 50);
    context.fillText('Active state: ' + player.currentState.state, 20, 90);
}