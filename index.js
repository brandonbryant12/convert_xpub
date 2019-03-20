

const sha256 = require('sha256')

const bs58 = require('bs58')

var bs58check = require('bs58check')

function convert(input_seed){

  let input_seed_prefix = input_seed.substring(0,4)

  //xpub prefix
  let buffer = new Buffer.from([0x04, 0x88, 0xb2, 0x1e])

  // bas58 decode old
  let seed_bytes = bs58.decode(input_seed)

  // swap out the firs 4 header bytes with the prober xpub values
  seed_bytes = Buffer.concat([buffer,seed_bytes.slice(4,seed_bytes.length)])

  //ditch the old checksum (remove last 4 bytes)
  seed_bytes = seed_bytes.slice(0, seed_bytes.length-4)

  //return new checksum
  return bs58check.encode(seed_bytes)

}

