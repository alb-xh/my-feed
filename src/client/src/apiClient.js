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

    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res;
  }

  static async signIn(user) {
    const url = ApiClient.getUrl('/users/sign-in');

    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res;
  }

  static async signOut() {
    const url = ApiClient.getUrl('/users/sign-out');

    const res = await fetch(url, {
      method: 'POST',
    });

    return res;
  }
}
