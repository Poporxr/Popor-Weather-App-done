const unitMenu = document.querySelector('.units');
const unitDrop = document.querySelector('.dropdown-unt');
const daysMenu = document.querySelector('.right-forecast');
const daysDrop = document.querySelector('.day-drop');


unitMenu.addEventListener('click', () => {
  unitDrop.classList.toggle('active');
});
daysMenu.addEventListener('click', () => {
  daysDrop.classList.toggle('popor');
});

const foreDay = document.querySelector('.fore-day')
const monday = document.querySelector('.monday');
const tuesday = document.querySelector('.tuesday');
const wednesday = document.querySelector('.wednesday');
const thursday = document.querySelector('.thursday');
const friday = document.querySelector('.friday');
const saturday = document.querySelector('.saturday');
const sunday = document.querySelector('.sunday');

monday.addEventListener ('click', () => {
  daysDrop.classList.toggle('popor');
  foreDay.innerHTML = 'Monday'
});
tuesday.addEventListener ('click', () => {
  daysDrop.classList.toggle('popor')
  foreDay.innerHTML = 'Tuesday'
});
wednesday.addEventListener ('click', () => {
  daysDrop.classList.toggle('popor')
  foreDay.innerHTML = 'Wednesday '
});
thursday.addEventListener ('click', () => {
  daysDrop.classList.toggle('popor')
  foreDay.innerHTML = 'Thursday'
});
friday.addEventListener ('click', () => {
  daysDrop.classList.toggle('popor')
  foreDay.innerHTML = 'Friday'
});
saturday.addEventListener ('click', () => {
  daysDrop.classList.toggle('popor')
 foreDay.innerHTML = 'Saturday'
});
sunday.addEventListener ('click', () => {
  daysDrop.classList.toggle('popor')
  foreDay.innerHTML = 'Sunday'
});

/*ANIMATION */
const fadeScroll = new IntersectionObserver((e)=> {
  e.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
document.querySelectorAll('.transition').forEach((e) => fadeScroll.observe(e));
/* --- */

/*UNIS CHECKMARK TOGGLE */
document.querySelectorAll('.drop-ut').forEach(option => {
  option.addEventListener('click', () => {
    const group = option.closest('.top-drop');

    if (option.classList.contains('ticked')) {
      option.classList.remove('ticked');
      return;
    }

    group.querySelectorAll('.drop-ut').forEach(o => {
      o.classList.remove('ticked')
    });
    option.classList.toggle('ticked');
  });
});
/* ------ */