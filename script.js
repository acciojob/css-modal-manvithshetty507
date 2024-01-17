//your JS code here. If required.
const btn = document.getElementById('openModal');

btn.addEventListener('click',btnClicked)

function btnClicked() {
	document.body.classList.add('active');
	document.getElementsByClassName('modal')[0].style.display = 'block';
	document.getElementById('close-btn').addEventListener('click',closeModal);
	btn.style.display='none';
	function closeModal() {
		document.getElementsByClassName('modal')[0].style.display = 'none';
		document.body.classList.remove('active');
		btn.style.display='block';
	}
}

