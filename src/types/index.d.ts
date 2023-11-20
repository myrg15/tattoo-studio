export { }

export interface TokenDecoded {
  users: number,
  role: string,
  email: string
}

declare global {
    namespace Express {
        export interface Request {
            // decoded token
            token: TokenDecoded;
        }
    }
}