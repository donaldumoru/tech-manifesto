let yearOnLoad = document.querySelector('.year-on-load');
let onLoadText = document.querySelector('.on-load-text');
let openOnLoadSection = document.querySelector('.open-on-load');
let imageDisplayPast = document.querySelector('.img-display-past');
let imageDisplayPresent = document.querySelector('.img-display-present');
let imageDisplayFuture = document.querySelector('.img-display-future');
let pastManifestoSection = document.querySelector('.past-manifesto');
let presentManifestoSection = document.querySelector('.present-manifesto');
let futureManifestoSection = document.querySelector('.future-manifesto');
let presentBtn = document.querySelector('.present');
let futureBtn = document.querySelector('.future');

const date = new Date();

const welcomeArr = [
  'The year is 2050. Technology has evolved beyond my wildest dreams',
  'But before we dive into this future, let’s rewind and see how I got here.',
];

let futureYear = date.getFullYear() + 26;

let counter = 0;

function displayWelcomeMessages() {
  if (counter < welcomeArr.length) {
    onLoadText.textContent = welcomeArr[counter];
    counter++;

    setTimeout(displayWelcomeMessages, 2000);
  } else {
    setTimeout(() => {
      yearOnLoad.style.opacity = '1';
      onLoadText.style.display = 'none';

      const yearInterval = setInterval(() => {
        if (futureYear > 1999) {
          yearOnLoad.textContent = futureYear--;
        } else {
          clearInterval(yearInterval);

          openOnLoadSection.style.opacity = '0';

          setTimeout(() => {
            openOnLoadSection.style.display = 'none';
            pastManifestoSection.style.display = 'flex';
            pastManifestoSection.style.opacity = '1';
          }, 1000);
        }
      }, 50);
    }, 2000);
  }
}

setTimeout(displayWelcomeMessages, 2000);

document.querySelectorAll('.hover-image-past').forEach(item => {
  item.addEventListener('click', event => {
    imageDisplayPast.src = `${event.target.getAttribute('data-image')}`;
  });
});

document.querySelectorAll('.hover-image-present').forEach(item => {
  item.addEventListener('click', event => {
    imageDisplayPresent.src = `${event.target.getAttribute('data-image')}`;
  });
});

document.querySelectorAll('.hover-image-future').forEach(item => {
  item.addEventListener('click', event => {
    imageDisplayFuture.src = `${event.target.getAttribute('data-image')}`;
  });
});

presentBtn.addEventListener('click', function () {
  pastManifestoSection.style.opacity = '0';

  setTimeout(() => {
    pastManifestoSection.style.display = 'none';
    presentManifestoSection.style.display = 'flex';

    setTimeout(() => {
      presentManifestoSection.style.opacity = '1';
    }, 20);
  }, 1000);
});

futureBtn.addEventListener('click', function () {
  presentManifestoSection.style.opacity = '0';

  setTimeout(() => {
    presentManifestoSection.style.display = 'none';
    futureManifestoSection.style.display = 'flex';

    setTimeout(() => {
      futureManifestoSection.style.opacity = '1';
    }, 20);
  }, 1000);
});
