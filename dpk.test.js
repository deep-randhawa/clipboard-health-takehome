const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe('0');
  });

  it('Returns initial-randomKey as string if included in event as partitionKey', () => {
    const randomKey = Math.random();

    const key = deterministicPartitionKey({ partitionKey: randomKey });
    expect(key).toBe(randomKey.toString());
  });

  it('Spits out a 128-char hex SHA3 on non-partitionKey event', () => {
    const randomKey = Math.random();
    const shaLen = 128;

    const key = deterministicPartitionKey('random-key');
    expect(key.length).toBe(shaLen);
  });
});
