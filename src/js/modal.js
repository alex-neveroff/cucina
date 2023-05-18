(() => {
  const refs = {
    body: document.querySelector('body'),

    openContactModalBtn: document.querySelectorAll('.contacts-open'),
    closeContactModalBtn: document.querySelector('.contacts-close'),
    contactModal: document.querySelector('.contact-modal'),
    openOrderModalBtn: document.querySelectorAll('.order-open'),
    closeOrderModalBtn: document.querySelector('.order-close'),
    orderModal: document.querySelector('.order-modal'),
  };

  refs.openContactModalBtn.forEach(btn =>
    btn.addEventListener('click', () => openModal(refs.contactModal, refs.body))
  );
  refs.closeContactModalBtn.addEventListener('click', () =>
    closeModal(refs.contactModal, refs.body)
  );

  refs.openOrderModalBtn.forEach(btn =>
    btn.addEventListener('click', () => openModal(refs.orderModal, refs.body))
  );
  refs.closeOrderModalBtn.addEventListener('click', () =>
    closeModal(refs.orderModal, refs.body)
  );

  window.addEventListener('keydown', handleKeyPress);

  function handleKeyPress(event) {
    if (event.key === 'Escape') {
      if (!refs.contactModal.classList.contains('is-hidden')) {
        closeModal(refs.contactModal, refs.body);
      }
      if (!refs.orderModal.classList.contains('is-hidden')) {
        closeModal(refs.orderModal, refs.body);
      }
    }
  }

  function openModal(modal, body) {
    modal.classList.remove('is-hidden');
    body.classList.add('no-scroll');
  }

  function closeModal(modal, body) {
    modal.classList.add('is-hidden');
    body.classList.remove('no-scroll');
  }
})();
