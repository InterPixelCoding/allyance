var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
const slide = document.querySelector('.background-image');
	 
// Image List
image = "./images/image1.jpg";

// Change Image
slide.src = image


//dropdowns
document.addEventListener("click", e => {
	const isDropdownButton = e.target.matches("[data-dropdown-button]")
	if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
	let currentDropdown
	if (isDropdownButton) {
	  currentDropdown = e.target.closest("[data-dropdown]")
	  currentDropdown.classList.toggle("active")
	}
  
	document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
	  if (dropdown === currentDropdown) return
	  dropdown.classList.remove("active")
	})
  })


	console.log(document.querySelectorAll('.back-to-top'))

function openMenu () {
  document.querySelector('.topnav').style.top = '0'
  document.querySelector('.topnav').style.opacity = '1'
}

function closeMenu () {
  document.querySelector('.topnav').style.top = '-100%'
  document.querySelector('.topnav').style.opacity = '0'
}

function Change(word) {
	//find all html elements on the page inside the body tag
	let elems = document.querySelectorAll("p");
	// get our replacement ready
	let span = "<span class='allyance'>" + word + "</span>";
	//loop through all the elements
	for (let x = 0; x < elems.length; x++) {
	  // for each element, 'split' by the word we're looking for, then 'join' it back with the replacement
	  elems[x].innerHTML = elems[x].innerHTML.split(word).join(span);
	}
  }
  
Change('allyance');

// animate in on scroll
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	}))
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// table of contents
const headings = document.querySelectorAll('.subheading');

// Get the <div class="contents"> element
const contentsDiv = document.querySelector('.contents');

// Iterate over the <h1> elements
for (const heading of headings) {
  	// Create an anchor element
	const anchor = document.createElement('a');
	// Set the href attribute of the anchor to the ID of the <h1> element
	anchor.href = `#${heading.id}`;
	// Set the text of the anchor to the text content of the <h1> element
	anchor.textContent = heading.textContent;

	// Append the anchor to the <div class="contents"> element
	contentsDiv.appendChild(anchor);
}

// read more buttons
function abby() {
	const amymore = document.querySelector('.abby > p');
	amymore.classList.toggle('show-less')
}
function ellie() {
	const amymore = document.querySelector('.ellie > p');
	amymore.classList.toggle('show-less')
}
function helen() {
	const amymore = document.querySelector('.helen > p');
	amymore.classList.toggle('show-less')
}
function karen() {
	const amymore = document.querySelector('.karen > p');
	amymore.classList.toggle('show-less')
}
function amy() {
	const amymore = document.querySelector('.amy > p');
	amymore.classList.toggle('show-less')
}

