const checkReadinessExternalUtilites = require('./checkReadinessExternalUtilites.js');
const findConfigs = require('./configurationFiles');
const findSourceFiles = require('./sourceFiles');
const processing = require('./processing');
const importPhotos = require('./importPhotos');

async function main() {
  const reasonFail = checkReadinessExternalUtilites();

  if (reasonFail) {
    console.log(reasonFail);
    process.exit(1);
  }

  const configs = await findConfigs();


  // console.log(configs[0]);
  // console.log('-------------');
  // console.log(configs[0].tasks[0]);

  // configs[0].tasks.forEach(it => {
  //   console.log('------')
  //   console.log(it)
  // })
  // return;


  for (const config of configs) {
    const sourceFilePaths = await findSourceFiles(config);

    // console.log(sourceFilePaths);

    const createdFiles = await processing(config, sourceFilePaths/*.slice(0, 3)*/);

    importPhotos(config, createdFiles);


    // console.log(createdFiles);
  }
}

module.exports = main;





/*


// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });



const dir = process.cwd();

 */
