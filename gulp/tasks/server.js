export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.html}`,
            index: 'page-home.html',
            routes: {
                "/index.html": `${app.path.build.html}/404.html`
            }
        },
        notify: false,
        port: 3000,
    });
}