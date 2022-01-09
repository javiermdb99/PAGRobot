/**Ejemplo modificado de Learn ThreeJs
**/

//Variables
var scene, renderer, camera;
var controls;
var grupoCuerpo, grupoCabeza;

function init() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    createRobot(scene);

    // position and point the camera to the center of the scene
    camera.position.set(0, 40, 30);
    camera.lookAt(scene.position);

    const light = new THREE.AmbientLight(0x000000);
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    scene.add(directionalLight);

    const firstPointLight = new THREE.PointLight(0xff0000, 1, 8);
    firstPointLight.position.set(6, 14, 4);
    scene.add(firstPointLight);

    const secondPointLight = new THREE.PointLight(0xffff00, 1, 8);
    secondPointLight.position.set(-6, 14, 4);
    scene.add(secondPointLight);

    // add the output of the renderer to the html element
    document.getElementById("contenedor").appendChild(renderer.domElement);

    //controles
    createControls();

    // render the scene
    renderer.render(scene, camera);
}

function createControls() {

    controls = new THREE.TrackballControls(camera, renderer.domElement);

    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;

    controls.keys = [65, 83, 68];

}

function teclado(e) {

    switch (e.key) {
        case 'ArrowUp':
            moverRobot(-0.1, "z")
            break;
        case 'ArrowDown':
            moverRobot(0.1, "z")
            break;
        case 'ArrowLeft':
            moverRobot(-0.1, "x")
            break;
        case 'ArrowRight':
            moverRobot(0.1, "x");
            break;
        case "a":
            grupoCabeza.rotateY(-0.1);
            break;
        case "d":
            grupoCabeza.rotateY(0.1);
            break;
    }
    e.preventDefault();
    render();

}

function moverCabeza(distancia, coord) {
    if (coord == "x") {
        grupoCabeza.rotateY(distancia);
    } else {
        grupoCabeza.rotateX(distancia);
    }
}

function moverRobot(distancia, coord) {
    if (coord == "x") {
        grupoCabeza.position.x += distancia;
        grupoCuerpo.position.x += distancia;
    } else {
        grupoCabeza.position.z += distancia;
        grupoCuerpo.position.z += distancia;
    }
}

function animate() {

    requestAnimationFrame(animate);
    controls.update();
    render();

}

function render() {
    renderer.render(scene, camera);

}

function createRobot(scene) {
    const texturaCabeza = new THREE.TextureLoader().load('http://cors.io/?https://raw.githubusercontent.com/javiermdb99/PAGRobot/master/textura_cabeza.jpg');
    const texturaCamiseta = new THREE.TextureLoader().load('http://virtual.lab.inf.uva.es:27092/texturas/cuero_azul.jpg');
    
    var piernaDerGeometry = new THREE.CylinderGeometry(.65, .65, 7, 64, 64);
    var piernaIzqGeometry = new THREE.CylinderGeometry(.65, .65, 7, 64, 64);
    var cuerpoGeometry = new THREE.BoxGeometry(6, 6, 6);
    var cuelloGeometry = new THREE.CylinderGeometry(0.75, 0.75, 2, 64, 64);
    var cabezaGeometry = new THREE.SphereGeometry(2, 64, 32);
    var ojoIzqGeometry = new THREE.SphereGeometry(.25, 64, 32);
    var ojoDerGeometry = new THREE.SphereGeometry(.25, 64, 32);
    var brazoDerGeometry = new THREE.BoxGeometry(1, 4, 1);
    var brazoIzqGeometry = new THREE.BoxGeometry(1, 4, 1);
    var antebrazoDerGeometry = new THREE.BoxGeometry(1, 1, 5);
    var antebrazoIzqGeometry = new THREE.BoxGeometry(1, 1, 5);
    var manoIzqGeometry = new THREE.SphereGeometry(0.75, 64, 32);
    var manoDerGeometry = new THREE.SphereGeometry(0.75, 64, 32);

    grupoCabeza = new THREE.Group();
    grupoCuerpo = new THREE.Group();

    // materiales, recuerda que tienen que ser diferentes!!
    var piernaDerMat = new THREE.MeshToonMaterial({
        color: 0xFF9E9E
    });
    var piernaIzqMat = new THREE.MeshToonMaterial({
        color: 0xFF9E9E
    });
    var cuerpoMat = new THREE.MeshBasicMaterial({
        color: 0xFFF703,
        map: texturaCamiseta
    });
    var cabezaMat = new THREE.MeshToonMaterial({
        color: 0xFF9E9E
    });
    var ojoIzqMat = new THREE.MeshToonMaterial({
        color: 0x0000FF
    });
    var ojoDerMat = new THREE.MeshToonMaterial({
        color: 0x0000FF
    });
    var cuelloMat = new THREE.MeshToonMaterial({
        color: 0xFF9E9E
    });
    var brazoDerMat = new THREE.MeshToonMaterial({
        color: 0xFF9E9E
    });
    var brazoIzqMat = new THREE.MeshToonMaterial({
        color: 0xFF9E9E
    });
    var antebrazoDerMat = new THREE.MeshToonMaterial({
        color: 0xFF9E9E
    });
    var antebrazoIzqMat = new THREE.MeshToonMaterial({
        color: 0xFF9E9E
    });
    var manoIzqMat = new THREE.MeshToonMaterial({
        color: 0xFF9E9E
    });
    var manoDerMat = new THREE.MeshToonMaterial({
        color: 0xFF9E9E
    });

    piernaDer = new THREE.Mesh(piernaDerGeometry, piernaDerMat)
    piernaDer.position.set(-1, 3.5, 0);
    piernaIzq = new THREE.Mesh(piernaIzqGeometry, piernaIzqMat)
    piernaIzq.position.set(1, 3.5, 0);
    cuerpo = new THREE.Mesh(cuerpoGeometry, cuerpoMat);
    cuerpo.position.set(0, 10, 0);
    cabeza = new THREE.Mesh(cabezaGeometry, cabezaMat);
    cabeza.position.set(0, 16, 0);
    ojoIzq = new THREE.Mesh(ojoIzqGeometry, ojoIzqMat);
    ojoIzq.position.set(-.5, 17, 2);
    ojoDer = new THREE.Mesh(ojoDerGeometry, ojoDerMat);
    ojoDer.position.set(.5, 17, 2);
    cuello = new THREE.Mesh(cuelloGeometry, cuelloMat);
    cuello.position.set(0, 14, 0);
    brazoDer = new THREE.Mesh(brazoDerGeometry, brazoDerMat);
    brazoDer.position.set(-3.5, 10, 0);
    brazoIzq = new THREE.Mesh(brazoIzqGeometry, brazoIzqMat);
    brazoIzq.position.set(3.5, 10, 0);
    antebrazoDer = new THREE.Mesh(antebrazoDerGeometry, antebrazoDerMat);
    antebrazoDer.position.set(-3.5, 8, 2);
    antebrazoIzq = new THREE.Mesh(antebrazoIzqGeometry, antebrazoIzqMat);
    antebrazoIzq.position.set(3.5, 8, 2);
    manoIzq = new THREE.Mesh(manoIzqGeometry, manoIzqMat);
    manoIzq.position.set(-3.5, 8, 5);
    manoDer = new THREE.Mesh(manoDerGeometry, manoDerMat);
    manoDer.position.set(3.5, 8, 5);

    // CUANDO HAYA LUZ
    //piernaDer.castShadow = true;
    //piernaIzq.castShadow = true;

    grupoCuerpo.add(piernaDer);
    grupoCuerpo.add(piernaIzq);
    grupoCuerpo.add(cuerpo);
    //grupoCuerpo.add(cabeza);
    grupoCuerpo.add(cuello);
    grupoCuerpo.add(brazoDer);
    grupoCuerpo.add(brazoIzq);
    grupoCuerpo.add(antebrazoDer);
    grupoCuerpo.add(antebrazoIzq);
    //grupoCuerpo.add(ojoIzq);
    //grupoCuerpo.add(ojoDer);
    grupoCuerpo.add(manoIzq);
    grupoCuerpo.add(manoDer);

    grupoCabeza.add(cabeza);
    grupoCabeza.add(ojoIzq);
    grupoCabeza.add(ojoDer);

    scene.add(grupoCuerpo);
    scene.add(grupoCabeza);

    document.body.addEventListener('keydown', teclado, false);

}