const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/model-bucket-nopan/model.json');
}
module.exports = loadModel;