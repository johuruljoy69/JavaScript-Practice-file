const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1>My Dynamic section</h1>
            <ul>
                <li>list item-1</li>
                <li>list item-2</li>
                <li>list item-3</li>
                <li>list item-4</li>
            </ul>
`
main.appendChild(section);