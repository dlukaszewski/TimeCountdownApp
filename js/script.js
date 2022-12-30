const settings = document.querySelector(".settings");
const imageSection = document.querySelector(".image-section");

const eventName = document.querySelector("#event-name");
const eventDay = document.querySelector("#event-day");
const eventMonth = document.querySelector("#event-month");
const eventYear = document.querySelector("#event-year");
const imageInput = document.querySelector("#event-image");
const eventSpan = document.querySelector(".event");

const daysCount = document.querySelector(".days-count");
const hoursCount = document.querySelector(".hours-count");
const minutesCount = document.querySelector(".minutes-count");
const secondsCount = document.querySelector(".seconds-count");

const btnSave = document.querySelector(".save");
const settingsBtn = document.querySelector(".settings-btn");

let usersTime;

const appUpdate = () => {
	eventSpan.textContent = eventName.value;
	usersTime = new Date(
		`${eventMonth.value} ${eventDay.value} ${eventYear.value}`
	);
	imageSection.style.backgroundImage = `url('${imageInput.value}')`;
	setTime();
};

const setTime = () => {
	const currentTime = new Date();
	const result = usersTime - currentTime;

	const days = Math.floor(result / 1000 / 60 / 60 / 24);
	const hours = Math.floor(result / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(result / 1000 / 60) % 60;
	const seconds = Math.floor(result / 1000) % 60;

	daysCount.textContent = days;
	hoursCount.textContent = hours;
	minutesCount.textContent = minutes;
	secondsCount.textContent = seconds;
};

const showSettins = () => {
	settings.classList.toggle("active");
};

settingsBtn.addEventListener("click", showSettins);
btnSave.addEventListener("click", appUpdate);
appUpdate();
setInterval(setTime, 1000);
