const inside = document.querySelector("#inside");
const insideContent = document.querySelector("#inside-content");

inside.addEventListener("click", () => {
    const insideBox = new WinBox({
        title: 'blog',
        background: 'grey',
        border: 5,
        width: '300px',
        height: '400px',
        x: 'center',
        y: 'center',
        mount: insideContent,
        onfocus: function() {
            this.setBackground('lightgrey');
        },
        onblur: function() {
            this.setBackground('grey');
        }
    })
})