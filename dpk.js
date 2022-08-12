const crypto = require('crypto');

const createHexDigest = (data) => {
  const hashAlgorithm = 'sha3-512';
  const encoding = 'hex';

  return crypto.createHash(hashAlgorithm).update(data).digest(encoding);
};

exports.deterministicPartitionKey = (event) => {
  if (!event) {
    return '0';
  }

  const candidate = event.partitionKey
    ? event.partitionKey
    : createHexDigest(JSON.stringify(event));

  return (typeof candidate !== 'string')
    ? JSON.stringify(candidate)
    : candidate;
};
