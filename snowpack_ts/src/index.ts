import * as NovoRender from "@novotech/novorender";
import "gl-matrix";

main(document.getElementById("output") as HTMLCanvasElement);

async function main(canvas: HTMLCanvasElement) {
    const api = NovoRender.createAPI();
    const view = api.createView(canvas, { background: { color: [0, 0, 0.25, 1] } });
    const scene = await api.loadScene(NovoRender.WellKnownSceneIds.cube);
    view.scene = scene;
    view.camera.controller = api.createCameraController({ kind: "turntable" });
}
