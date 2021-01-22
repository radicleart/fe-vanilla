/// <reference path='./babylon.d.ts' />

const canvas = document.getElementById('renderCanvas')

const engine = BABYLON.Engine(canvas)

// creat a scene, camera, light
function createScene() {
    // create a scene
    const scene = new BABYLON.Scene(engine)

    // create camara(name, Vector3) - free camera - first person
    const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0,0,0), scene)

    // create light - hemisphereic light like light in a room.
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0,1,0), scene)

    return Scene

}

const scene = createScene()

engine.runRenderLoop(() => {
    scene.render()
})