const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

var geometry = new THREE.BoxGeometry( 4, 4, 4)
var material = new THREE.MeshBasicMaterial( { color: 0xf8e80 })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )
renderer.render( scene, camera )
camera.position.z = 8

function animate() {
 requestAnimationFrame( animate )
 cube.rotation.x += 0.04;
 cube.rotation.y += 0.04;
 cube.rotation.z += 0.04;
 renderer.render( scene, camera )
}

animate()