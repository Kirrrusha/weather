export const httpGet = endPoint => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', endPoint, true);

  xhr.onload = function() {
    if (this.status === 200) {
      resolve(this.response);
    } else {
      const error = new Error(this.statusText);
      error.code = this.status;
      reject(error);
    }
  };

  xhr.onerror = function() {
    reject(new Error("Network Error"));
  };

  xhr.send();
});
