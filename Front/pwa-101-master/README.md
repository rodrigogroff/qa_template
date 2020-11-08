# Progressive web app - 101

This is an intro project for progressive web apps that pass 100% in Google Lighthouse checks

## Make it run

- Clone the repository
- In the terminal install the dependencies with `npm install`
- Run `npm run server-debug`

If you need to generate the certs you can use:

openssl req -x509 -nodes -new -sha256 -days 1024 -newkey rsa:2048 -keyout RootCA.key -out RootCA.pem -subj "/C=US/CN=Example-Root-CA"
openssl x509 -outform pem -in RootCA.pem -out RootCA.crt



To test using Chrome with invalid certs use the following to open the browser:

```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost
```

## Contributing

This is a reference repository for this [article](https://blog.logrocket.com/how-to-build-a-progressive-web-app-pwa-with-node-js/) so I will only look into accept any bug fix or improvement that doesn't vastly change the current content.

On the other hand, you're encouraged to fork and improve it in your own repository, let me know what you come up with ^^.
