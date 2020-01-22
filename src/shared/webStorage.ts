import jwt from 'jsonwebtoken';

export class WebStorage {
  public static getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  public static setAccessToken(accessToken: string): void {
    localStorage.setItem('accessToken', accessToken);
  }

  public static removeAccessToken(): void {
    localStorage.removeItem('accessToken');
  }

  public static getAuthData(): any {
    const accessToken = WebStorage.getAccessToken();
    if (!accessToken) return null;

    const authData = jwt.decode(accessToken);
    return authData;
  }
}
