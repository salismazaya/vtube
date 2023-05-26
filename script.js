const cubism2Model = "RAM/RAM.model3.json";
(async function main() {
    const app = new PIXI.Application({
        view: document.getElementById("canvas"),
        autoStart: true,
        resizeTo: window
    });

    const model = await PIXI.live2d.Live2DModel.from(cubism2Model);

    app.stage.addChild(model);

    model.scale.set(0.25);
    model.x = -200
    model.y = 20

    channel.bind('play', async function (data) {
        const message = data
        document.querySelector('#sekeren').innerHTML = message.message
        let open = true;
        const interval = setInterval(() => {
            model.internalModel.coreModel.setParameterValueById('ParamMouthOpenY', open ? 1 : 0)
            open = !open
        }, 200)
        setTimeout(() => {
            clearInterval(interval)
        }, message.duration * 1000)
    });

})();
