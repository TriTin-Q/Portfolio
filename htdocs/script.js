
document.addEventListener('DOMContentLoaded', function() {
    var card = document.querySelector('.section1');
    card.addEventListener('click', function() {
        console.log('test');
        const modal = document.createElement('div');
        modal.style.width = '70%';
        modal.style.height = '70%';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'space-around';
        modal.style.alignItems = 'center';
        modal.style.flexDirection = 'column';
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.backgroundColor = 'white';
        modal.style.padding = '20px';
        modal.style.borderRadius = '10px';
        modal.style.zIndex = '1000';
        modal.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
        
        const title = document.createElement('h2');
        title.innerText = 'About Me';

        const content = document.createElement('div');
        content.style.display = 'flex';
        content.style.alignItems = 'center';
        content.style.justifyContent = 'space-around';
        content.style.width = '100%';


        const image = document.createElement('img');
        image.src = 'assets/firstrCardTop.png'; // Remplacez par le chemin de votre image
        image.style.width = '500px'; // Ajustez selon vos besoins
        image.style.height = '500px'; // Ajustez selon vos besoins
        image.style.marginRight = '20px';

        const characteristics = document.createElement('div');
        characteristics.innerHTML = `<p>Etant dans l'informatique depuis très jeune, la programmation est vite devenu pour moi une passion.</p>
        <p>A mon tour de vous en faire profiter !</p><br> <p> Coordonnées : <p><ul>
        <li>Adresse email : quachtritin@gmail.com</li> 
        <li>Téléphone : 06.09.31.48.13</li>
        <li>Mes réseaux : <a href="https://www.linkedin.com/in/tritin-quach/"><img class="icons" src="assets/Linkdin.png"></a> 
        <a href="https://github.com/TriTin-Q"><img class="icons" src="assets/github.png"></a> </li>
        </ul>`; // Ajoutez plus de caractéristiques ici


        content.appendChild(image);
        content.appendChild(characteristics);

        
        const changeContentButton = document.createElement('button');
        changeContentButton.innerText = 'Compétences';
        changeContentButton.style.position = 'absolute';
        changeContentButton.style.bottom = '20px';
        changeContentButton.style.right = '20px';
        changeContentButton.onclick = function() {
            title.innerText = 'Compétences';
            image.src = 'assets/mage.png'; // Chemin vers la nouvelle image
            characteristics.innerHTML = `
            <h3>Mes Compétences</h3>
            <div class="skill">
                <p>HTML/CSS</p>
                <div class="skill-level" style="width: 90%; background-color: #4CAF50; height: 24px; border-radius: 4px;"></div>
            </div>
            <div class="skill">
                <p>JavaScript</p>
                <div class="skill-level" style="width: 75%; background-color: #2196F3; height: 24px; border-radius: 4px;"></div>
            </div>
            <div class="skill">
                <p>Python</p>
                <div class="skill-level" style="width: 60%; background-color: #ffc107; height: 24px; border-radius: 4px;"></div>
            </div>
            <div class="skill">
                <p>Autre compétence</p>
                <div class="skill-level" style="width: 85%; background-color: #e91e63; height: 24px; border-radius: 4px;"></div>
            </div>
        `;         
    };

        const closeButton = document.createElement('button');
        closeButton.innerText = 'Fermer';
        closeButton.onclick = function() {
            modal.remove();
        };

        modal.appendChild(title);
        modal.appendChild(content);

        modal.appendChild(changeContentButton);
        modal.appendChild(closeButton);

        document.body.appendChild(modal);        
    });
});