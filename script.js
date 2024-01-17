//your JS code here. If required.
const btn = document.getElementById('openModal');

btn.addEventListener('click',btnClicked)

function btnClicked() {
	document.body.classList.add('active');
	document.getElementsByClassName('modal')[0].style.display = 'flex';
	document.getElementById('close-btn').addEventListener('click',closeModal);
	btn.disabled = true;
	function closeModal() {
		document.getElementsByClassName('modal')[0].style.display = 'none';
		document.body.classList.remove('active');
		btn.disabled = false;
	}
}

