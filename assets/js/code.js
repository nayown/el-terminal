const code = document.querySelector("#code");
const codeContent = document.querySelector("#code-content");

code.addEventListener("click", () => {
    const codeBox = new WinBox({
        title: 'code',
        background: 'grey',
        border: 5,
        width: '300px',
        height: '400px',
        x: 'center',
        y: 'center',
        mount: codeContent,
        onfocus: function() {
            this.setBackground('lightgrey');
        },
        onblur: function() {
            this.setBackground('grey');
        }
    })
})