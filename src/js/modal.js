(() => {
  const openContactModalBtn = document.querySelectorAll('.contacts-open');
  const closeContactModalBtn = document.querySelector('.contacts-close');
  const contactModal = document.querySelector('.contact-modal');
  const openOrderModalBtn = document.querySelectorAll('.order-open');
  const closeOrderModalBtn = document.querySelector('.order-close');
  const orderModal = document.querySelector('.order-modal');
  const body = document.querySelector('body');

  openContactModalBtn.forEach(btn =>
    btn.addEventListener('click', () => openModal(contactModal))
  );
  closeContactModalBtn.addEventListener('click', () =>
    closeModal(contactModal)
  );

  openOrderModalBtn.forEach(btn =>
    btn.addEventListener('click', () => openModal(orderModal))
  );
  closeOrderModalBtn.addEventListener('click', () => closeModal(orderModal));

  window.addEventListener('keydown', handleKeyPress);

  function handleKeyPress(event) {
    if (event.key === 'Escape') {
      if (!contactModal.classList.contains('is-hidden')) {
        closeModal(contactModal);
      }
      if (!orderModal.classList.contains('is-hidden')) {
        closeModal(orderModal);
      }
    }
  }

  function openModal(modal) {
    modal.classList.remove('is-hidden');
    body.classList.add('no-scroll');
  }

  function closeModal(modal) {
    modal.classList.add('is-hidden');
    body.classList.remove('no-scroll');
  }
})();
