function produceDrivingRange(blockRange){
  return function blocksOutOfRange(block1, block2){
    block1 = block1.replace(/\D/g,'')
    block2 = block2.replace(/\D/g,'')

    let distance = Math.abs(block1-block2)
    if ( distance > blockRange){
      return `${distance - blockRange} blocks out of range`
    }else{
      return `within range by ${blockRange - distance}`
    }
  }
}

function produceTipCalculator(decimal){
  return function produceTip(fare){
    return fare * decimal
  }
}

function createDriver() {
  let DriverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  };
}
