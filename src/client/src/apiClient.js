
export class ApiClient {
  static baseUrl () {
    return new URL(window.location.href).origin;
  }

  static getUrl (path) {
    return [ ApiClient.baseUrl, path ].join('/');
  }

  static async getUser () {
    const url = ApiClient.getUrl('/user');
    const res = await fetch(url);

    return res;
  }
};
