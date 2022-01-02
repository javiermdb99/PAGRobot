/**Ejemplo modificado de Learn ThreeJs
**/

//Variables
var scene, renderer, camera;
var controls;

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

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(50, 50);
    var planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xAAAAAA
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    //plane.position.set(0, 0, 0);

    // add the plane to the scene
    scene.add(plane);

    createRobot(scene);

    // position and point the camera to the center of the scene
    camera.position.set(0, 40, 30);
    camera.lookAt(scene.position);

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


function animate() {

    requestAnimationFrame(animate);
    controls.update();
    render();

}

function render() {
    renderer.render(scene, camera);

}

function createRobot(scene) {
    var piernaDerGeometry = new THREE.BoxGeometry(1, 7, 1);
    var piernaIzqGeometry = new THREE.BoxGeometry(1, 7, 1);
    var cuerpoGeometry = new THREE.BoxGeometry(6, 6, 6);
    var cabezaGeometry = new THREE.BoxGeometry(2, 2, 2);
    var brazoDerGeometry = new THREE.BoxGeometry(1, 4, 1);
    var brazoIzqGeometry = new THREE.BoxGeometry(1, 4, 1);

    // materiales, recuerda que tienen que ser diferentes!!
    var piernaDerMat = new THREE.MeshBasicMaterial({
        color: 0xFF9E9E
    });
    var piernaIzqMat = new THREE.MeshBasicMaterial({
        color: 0xFF9E9E
    });
    var cuerpoMat = new THREE.MeshBasicMaterial({
        color: 0xFFF703
    });
    var cabezaMat = new THREE.MeshBasicMaterial({
        color: 0xFF9E9E
    });
    var brazoDerMat = new THREE.MeshBasicMaterial({
        color: 0xFF9E9E
    });
    var brazoIzqMat = new THREE.MeshBasicMaterial({
        color: 0xFF9E9E
    });

    var piernaDer = new THREE.Mesh(piernaDerGeometry, piernaDerMat)
    piernaDer.position.set(10, 3.5, 0);
    var piernaIzq = new THREE.Mesh(piernaIzqGeometry, piernaIzqMat)
    piernaIzq.position.set(12, 3.5, 0);
    var cuerpo = new THREE.Mesh(cuerpoGeometry, cuerpoMat);
    cuerpo.position.set(11, 10, 0);
    var cabeza = new THREE.Mesh(cabezaGeometry, cabezaMat);
    cabeza.position.set(11, 14, 0);
    var brazoDer = new THREE.Mesh(brazoDerGeometry, brazoDerMat);
    brazoDer.position.set(7.5, 10, 0);
    var brazoIzq = new THREE.Mesh(brazoIzqGeometry, brazoIzqMat);
    brazoIzq.position.set(14.5, 10, 0);

    // CUANDO HAYA LUZ
    //piernaDer.castShadow = true;
    //piernaIzq.castShadow = true;

    scene.add(piernaDer);
    scene.add(piernaIzq);
    scene.add(cuerpo);
    scene.add(cabeza);
    scene.add(brazoDer);
    scene.add(brazoIzq);
}