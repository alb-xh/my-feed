const respond = (res) => {
  const respondWith = (args) => {
    const { status, message } = args;

    res
      .status(status)
      .send(message);
  };

  const file = (filepath) => {
    res.sendFile(filepath);
  };

  const json = (obj) => {
    res.json(obj);
  };

  const ok = (message = 'OK') => {
    respondWith({ status: 200, message });
  };

  const created = (message = 'CREATED') => {
    respondWith({ status: 201, message });
  };

  const badRequest = (message = 'BAD REQUEST') => {
    respondWith({ status: 400, message });
  };

  const unauthenticated = (message = 'UNAUTHENTICATED') => {
    respondWith({ status: 401, message });
  };

  const forbidden = (message = 'FORBIDDEN') => {
    respondWith({ status: 403, message });
  };

  const notFound = (message = 'NOT FOUND') => {
    respondWith({ status: 404, message });
  };

  const conflict = (message = 'CONFLICT') => {
    respondWith({ status: 409, message });
  };

  const internalError = (message = 'INTERNAL SERVER ERROR') => {
    respondWith({ status: 500, message });
  };

  return {
    file,
    json,
    ok,
    created,
    badRequest,
    unauthenticated,
    forbidden,
    notFound,
    conflict,
    internalError,
  };
};

module.exports = respond;
