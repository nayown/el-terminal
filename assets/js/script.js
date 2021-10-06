const about = document.querySelector("#about");
const aboutContent = document.querySelector("#about-content");
const contact = document.querySelector("#contact");
const contactContent = document.querySelector("#contact-content");
const blog = document.querySelector("#blog");
const blogContent = document.querySelector("#blog-content");
const code = document.querySelector("#code");
const codeContent = document.querySelector("#code-content");

about.addEventListener("click", () => {
    const aboutBox = new WinBox({
        title: 'about',
        background: 'grey',
        border: 3,
        width: '300px',
        height: '400px',
        x: 'center',
        y: 'center',
        mount: aboutContent,
        onfocus: function() {
            this.setBackground('lightgrey');
        },
        onblur: function() {
            this.setBackground('grey');
        }
    })
})

contact.addEventListener("click", () => {
    const aboutBox = new WinBox({
        title: 'contact',
        background: 'grey',
        border: 3,
        width: '300px',
        height: '400px',
        x: 'center',
        y: 'center',
        mount: contactContent,
        onfocus: function() {
            this.setBackground('lightgrey');
        },
        onblur: function() {
            this.setBackground('grey');
        }
    })
})

blog.addEventListener("click", () => {
    const blogBox = new WinBox({
        title: 'blog',
        background: 'grey',
        border: 3,
        width: '300px',
        height: '400px',
        x: 'center',
        y: 'center',
        mount: blogContent,
        onfocus: function() {
            this.setBackground('lightgrey');
        },
        onblur: function() {
            this.setBackground('grey');
        }
    })
})

code.addEventListener("click", () => {
    const codeBox = new WinBox({
        title: 'code',
        background: 'grey',
        border: 3,
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



