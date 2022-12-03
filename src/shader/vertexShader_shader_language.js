export default `
    attribute vec3 aPosition;
    attribute vec3 aNormal;

    //Projektions-Matrix
    uniform mat4 uPMatrix;
    //Model-View-Matrix
    uniform mat4 uMVMatrix;

    uniform vec4 uColor;

    varying vec4 vColor;

    void main() {
        
        gl_Position = uPMatrix * uMVMatrix * vec4(aPosition, 1.0);

        vColor = vec4(aNormal.z, aNormal.z, aNormal.z, 1.0);
        vColor = uColor * (vColor + 1.0) / 2.0;

    }
`;
