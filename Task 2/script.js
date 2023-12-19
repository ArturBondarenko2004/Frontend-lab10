function showImages() {
	const fileInput = document.getElementById('fileInput');
	const imageContainer = document.getElementById('imageContainer');
	const message = document.getElementById('message');
	const error = document.getElementById('error');
 
	try {
	  const files = JSON.parse(fileInput.value);
	  if (!Array.isArray(files)) {
		 throw new Error('не вірне значення');
	  }
	  imageContainer.innerHTML = ''; 
 
	  files.forEach((file, index) => {
		 const imgElement = document.createElement('img');
		 imgElement.src = file.trim();
		 imgElement.alt = 'Image';
		 imgElement.classList.add('image-active'); 
		 imageContainer.appendChild(imgElement);
 
		 imgElement.addEventListener('click', () => {
			imgElement.classList.toggle('image-effects'); 
		 });
	  });
	  message.textContent = 'Успішно завантажено';
	  message.style.position = 'fixed';
	  message.style.top = '10px';
	  message.style.right = '10px';
	  message.style.color = 'green';
	  message.style.zIndex = '1000';
	  error.textContent = '';
	} catch (err) {
	  message.textContent = '';
	  error.textContent = err.message;
	}
 }

 window.onload = () => {
	showImages();
	const showImagesButton = document.getElementById('showImagesButton');
	showImagesButton.addEventListener('click', showImages);
 };
 
 
// ["car1.jpeg","car2.jpg","car3.jpeg"]