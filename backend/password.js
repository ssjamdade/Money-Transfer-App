
const argon2 = require('argon2');

// Hash a password
async function hashPassword(plainPassword) {
  try {
    const hash = await argon2.hash(plainPassword, {
      type: argon2.argon2id,         // Recommended variant
      memoryCost: 2 ** 16,            // 64 MB how much memory to use when hashing
      timeCost: 3,                    // Number of iterations (tune based on security needs)
      parallelism: 1,                 // Threads (tune based on system)
    });
    return hash;
  } catch (err) {
    throw new Error('Password hashing failed');
  }
}

// Verify a password
async function verifyPassword(hash, inputPassword) {
  try {
    return await argon2.verify(hash, inputPassword);
  } catch (err) {
    return false;
  }
}

module.exports = {
  hashPassword,
  verifyPassword,
};
