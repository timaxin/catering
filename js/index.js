document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    const app = {
        init: function() {
            console.log('App initialized');
        }
    };

    app.init();
});