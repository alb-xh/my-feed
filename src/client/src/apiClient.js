export class ApiClient {
  static get baseUrl() {
    return new URL(window.location.href).origin;
  }

  static getUrl(path) {
    return ApiClient.baseUrl + path;
  }

  static async getUser() {
    const url = ApiClient.getUrl('/user');
    const res = await fetch(url);

    return res;
  }

  static async createUser(user) {
    const url = ApiClient.getUrl('/user');

    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
