export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`,
            index: 'page-home.html',
            routes: {
                "/index.html": `${app.path.build.html}/404.html`,
                "/test": `${app.path.build.html}/test.html`
            }
        },
        notify: false,
        port: 3000,
    });
}