import * as THREE from "three";

export default class App {
	constructor() {
		this.animate = this.animate.bind(this);
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(
			70,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		this.renderer = new THREE.WebGLRenderer();
		this.geometry = new THREE.BoxGeometry(1, 1, 1);
		this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		this.cube = new THREE.Mesh(this.geometry, this.material);
	}
	animate() {
		requestAnimationFrame(this.animate);
		this.cube.rotation.x += 0.01;
		this.cube.rotation.y += 0.01;

		this.renderer.render(this.scene, this.camera);
	}
	init() {
		this.scene.add(this.cube);

		this.camera.position.z = 5;

		this.renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.domElement);
		this.animate();
	}
}
