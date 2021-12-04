import argon2 from 'argon2'

export const hashPassword = async (password: string) => {
  const hashPassword = await argon2.hash(password, {
    type: argon2.argon2i,
    parallelism: 3,
  });

  return hashPassword;
}

export const verifyPassword = async (hash: string, password: string) => {
  try {
    const response = await argon2.verify(hash, password, {
      type: argon2.argon2i,
      parallelism: 3,
    });

    return response;
  } catch (err) {
    return false;
  }
}