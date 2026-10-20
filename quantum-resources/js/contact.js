const fm = document.getElementById('enquiry');
if (fm) {
    fm.addEventListener('submit', e => {
        e.preventDefault(); let ok = true;
        fm.querySelectorAll('input,select,textarea').forEach(i => {
            const m = fm.querySelector('.err[data-for="' + i.id + '"]'); if (!m) return; let msg = ''; const v = i.value.trim();
            if (i.required && !v) msg = 'This field is required.';
            else if (i.type === 'email' && v && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) msg = 'Enter a valid email address.';
            else if (i.type === 'tel' && v && !/^\+?[\d\s-]{8,15}$/.test(v)) msg = 'Enter a valid phone number.';
            m.textContent = msg; i.classList.toggle('is-invalid', !!msg); if (msg) ok = false
        });
        document.getElementById('formNote').textContent = ok ? 'Your enquiry is ready to be submitted. Please connect the form to an email service before going live.' : 'Please correct the highlighted fields.'
    })
}
