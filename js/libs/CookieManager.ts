export class CookieManager {
  private cookieName: string = "skyOpenTemplate";
  private cookieValue: string;
  private readonly expiryDate: string;

  constructor(templateDir: string = "") {
    this.cookieValue = templateDir;
    const expires: Date = new Date();
    expires.setFullYear(expires.getFullYear() + 2);
    this.expiryDate = expires.toUTCString();
  }

  public set(value?: string): void {
    if (value) {
      this.cookieValue = value;
    }
    if (!this.cookieValue) {
      alert("Valid directory not chosen.");
      return;
    }
    document.cookie = `${this.cookieName}=${this.cookieValue};expires=${this.expiryDate};`;
  }

  public get(): string | null {
    if (document.cookie) {
      const splitCookie: string[] = document.cookie.split(";");
      if (splitCookie.length) {
        for (const cookie of splitCookie) {
          const key: string = cookie.split("=")[0].trim();
          const value: string = cookie.split("=")[1].trim();
          if (key === this.cookieName) {
            return value;
          }
        }
      }
    }
    return null;
  }
}
