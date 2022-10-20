const savedFile = {
    name: 'profile',
    extension: 'jpg',
    size: 29930
  }
  const { name, extension, size }  = savedFile

  function fileSummary(file) {
    console.log(`The file ${name}.${extension} is size of ${size} bytes.`)
  }

  fileSummary(savedFile)