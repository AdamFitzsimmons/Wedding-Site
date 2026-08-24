// ---------- mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------- countdown ----------
// EDIT THIS: confirm the exact ceremony start time.
const WEDDING_DATE = new Date('2027-09-04T15:00:00+10:00');

function updateCountdown() {
  const now = new Date();
  const diff = WEDDING_DATE - now;

  const els = {
    days: document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    mins: document.getElementById('cd-mins'),
    secs: document.getElementById('cd-secs'),
  };

  if (diff <= 0) {
    els.days.textContent = '0';
    els.hours.textContent = '0';
    els.mins.textContent = '0';
    els.secs.textContent = '0';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  els.days.textContent = days;
  els.hours.textContent = hours;
  els.mins.textContent = mins;
  els.secs.textContent = secs;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ---------- RSVP link ----------
document.getElementById('rsvpLink').href = 'https://docs.google.com/forms/d/18l1d6wua28LdncbXHQjSbFAgpEn0w9txTNY2BFQyy1Y/viewform';