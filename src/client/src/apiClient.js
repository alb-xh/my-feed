export class ApiClient {
  static get baseUrl() {
    const { origin } = new URL(window.location.href);
    return `${origin}/api`;
  }

  static getUrl(path) {
    return ApiClient.baseUrl + path;
  }

  static async getUser() {
    const url = ApiClient.getUrl('/users/me');
    const res = await fetch(url);

    return res;
  }

  static async createUser(user) {
    const url = ApiClient.getUrl('/users');

    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  static async signIn(user) {
    const url = ApiClient.getUrl('/users/sign-in');

    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
