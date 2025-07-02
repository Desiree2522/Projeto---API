// filepath: c:\Users\WINDOWS\OneDrive\Desktop\mini-Projeto M4\src\types\index.d.ts
declare module 'express-serve-static-core' {
  interface Request {
    body: {
      banda?: string;
      artista?: string;
      musico?: string;
      albuns?: string[];
    };
  }
}